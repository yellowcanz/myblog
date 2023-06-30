<template>
    <div>
        <p class="my-8 text-base xl:text-2xl font-bold text-sky-900 dark:text-slate-300">{{ countdown }}</p>
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue"


const countdown = ref('')
const countdownToNextHoliday = () => {
    fetch('/assets/2023.json')
        .then(response => response.json())
        .then(data => {
            const currentDate = new Date();
            const nextHoliday = data.days.find(day => new Date(day.date) >= currentDate && day.isOffDay);
            let daysOff = 0; // 放假天数
            if (nextHoliday) {
                const holidayDate = new Date(nextHoliday.date);
                const remainingTime = Math.max(holidayDate - currentDate, 0); //毫秒
                const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));  //天数 1000 * 60 * 60 *24
                const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  //小时 % 1000 * 60 * 60 * 24  / 1000 * 60 * 60
                const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));  //分钟  % 1000 * 60 * 60 / 1000 * 60
                const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);      //秒  % 1000 * 60 / 1000
                // console.log("距离下一个节假日" + nextHoliday.name + "还有 " + remainingDays + " 天 " + remainingHours + " 小时 " + remainingMinutes + " 分钟 " + remainingSeconds + " 秒。");
                const time = "下一个节假日" + nextHoliday.name + "还有 " + remainingDays + " 天 " + remainingHours + " 小时 " + remainingMinutes + " 分钟 " + remainingSeconds + " 秒。";
                const targetIndex = data.days.findIndex(item => item.date == nextHoliday.date)
                for (let i = targetIndex; i < data.days.length; i++) {
                    if (data.days[i].isOffDay) {
                        daysOff++
                    }
                }
                // console.log(nextHoliday.name + "的放假天数为 " + daysOff + " 天。");
                const longtime = nextHoliday.name + "放假 " + daysOff + " 天。";
                countdown.value = `${time}${longtime}`
            } else {
                countdown.value = "今年的节假日已经过完了，马上新的一年了。你赚到钱了吗？";
            }
        }).catch(err => { console.log(err); })
}


const intervalId = setInterval(countdownToNextHoliday, 1000)

onBeforeUnmount(() => {
    clearInterval(intervalId);
});


</script>
<style lang="less" module></style>
