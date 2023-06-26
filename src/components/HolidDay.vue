<template>
    <div>
        <p class="my-8 text-base xl:text-2xl font-bold text-slate-500 dark:text-slate-300">{{ countdown }}</p>
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from "vue"


const countdown = ref('')
const countdownToNextHoliday = () => {
    fetch('https://raw.githubusercontent.com/NateScarlet/holiday-cn/master/2023.json')
        .then(response => response.json())
        .then(data => {
            const currentDate = new Date();
            const nextHoliday = data.days.find(day => new Date(day.date) >= currentDate && day.isOffDay);
            let daysOff = 0; // 放假天数
            if (nextHoliday) {
                const holidayDate = new Date(nextHoliday.date);
                const remainingTime = Math.max(holidayDate - currentDate, 0);
                const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
                const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
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
                console.log("没有找到下一个节假日。");
            }
        }).catch(err => { console.log(err); })
}


const intervalId = setInterval(countdownToNextHoliday, 1000)

onBeforeUnmount(() => {
    clearInterval(intervalId);
});


</script>
<style lang="less" module></style>
