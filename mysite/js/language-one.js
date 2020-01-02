now = new Date(), hour = now.getHours()
if (hour < 6) { document.write("夜已深，请早歇息，祝小主梦中如意！") }
else if (hour < 9) { document.write("早上好，小主欢迎来到淬殇阁") }
else if (hour < 12) { document.write("上午好，小主欢迎来到淬殇阁") }
else if (hour < 14) { document.write("中午好，小主欢迎来到淬殇阁") }
else if (hour < 17) { document.write("下午好，小主欢迎来到淬殇阁") }
else if (hour < 19) { document.write("傍晚好，小主欢迎来到淬殇阁") }
else if (hour < 22) { document.write("晚上好，小主欢迎来到淬殇阁") }
else { document.write("小主，请早歇息") } 