now = new Date(), hour = now.getHours()
if (hour < 6) { document.write("夜已深，请早歇息，祝主人梦中如意！") }
else if (hour < 9) { document.write("早上好，主人欢迎来到淬殇宫") }
else if (hour < 12) { document.write("上午好，主人欢迎来到淬殇宫") }
else if (hour < 14) { document.write("中午好，主人欢迎来到淬殇宫") }
else if (hour < 17) { document.write("下午好，主人欢迎来到淬殇宫") }
else if (hour < 19) { document.write("傍晚好，主人欢迎来到淬殇宫") }
else if (hour < 22) { document.write("晚上好，主人欢迎来到淬殇宫") }
else { document.write("请早歇息") } 