// ____________________loops_____________________________ 
/*
for(i=1;i<=5;i++){
    console.log("loop",i);
}
sum=0;
for(i=1;i<=5;i++){
    sum = sum+i;
}
console.log(sum);
console.log("loop has ended");
 sum=0; 
 */
 //_____________________while loop_______________________________
/*
while(i!=10){
    i++;
    sum=sum+i;
}
console.log(sum);
*/
//______________________do while________________________________________
do{
    num = prompt("enter number (1-50) ");
    if(num==38){
        alert("your choice is right \u{1F497}");
        break;
    }
    alert("you have guess wrong number ")
    choice = prompt("click 1 for Continue & 0 for Exit \u{1F618}");
}while(choice==1);
/*
console.log("\u{1F497}");
let emojis = [
    "\u{1F600}", // 😀 grinning face
    "\u{1F601}", // 😁 beaming face
    "\u{1F602}", // 😂 tears of joy
    "\u{1F603}", // 😃 smiling face
    "\u{1F604}", // 😄 grinning with smiling eyes
    "\u{1F605}", // 😅 grinning with sweat
    "\u{1F606}", // 😆 squinting face
    "\u{1F607}", // 😇 smiling face with halo
    "\u{1F609}", // 😉 winking face
    "\u{1F60A}", // 😊 smiling with smiling eyes
    "\u{1F60B}", // 😋 yummy face
    "\u{1F60D}", // 😍 heart eyes
    "\u{1F60E}", // 😎 sunglasses
    "\u{1F60F}", // 😏 smirking face
    "\u{1F612}", // 😒 unamused
    "\u{1F613}", // 😓 cold sweat
    "\u{1F614}", // 😔 pensive
    "\u{1F616}", // 😖 confused
    "\u{1F617}", // 😗 kissing
    "\u{1F61B}", // 😛 tongue out
    "\u{1F61C}", // 😜 wink tongue
    "\u{1F61D}", // 😝 squint tongue
    "\u{1F61E}", // 😞 disappointed
    "\u{1F620}", // 😠 angry
    "\u{1F622}", // 😢 crying
    "\u{1F623}", // 😣 persevering
    "\u{1F625}", // 😥 relieved
    "\u{1F628}", // 😨 fearful
    "\u{1F629}", // 😩 weary
    "\u{1F62A}", // 😪 sleepy
    "\u{1F62B}", // 😫 tired
    "\u{1F62D}", // 😭 sobbing
    "\u{1F630}", // 😰 anxious
    "\u{1F631}", // 😱 scream
    "\u{1F632}", // 😲 astonished
    "\u{1F633}", // 😳 flushed
    "\u{1F634}", // 😴 sleeping
    "\u{1F635}", // 😵 dizzy
    "\u{1F636}", // 😶 no mouth
    "\u{1F637}", // 😷 mask
    "\u{1F638}", // 😸 grinning cat
    "\u{1F639}", // 😹 cat with tears of joy
    "\u{1F63B}", // 😻 smiling cat with heart eyes
    "\u{1F63C}", // 😼 cat with smirk
    "\u{1F63D}", // 😽 kissing cat
    "\u{1F63E}", // 😾 angry cat
    "\u{1F63F}", // 😿 crying cat
    "\u{1F640}", // 🙀 weary cat
    "\u{1F44F}", // 👏 clapping
    "\u{1F44D}", // 👍 thumbs up
  ];
  
  console.log(emojis.join(" "));
*/