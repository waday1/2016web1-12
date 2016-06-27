var number = Math.floor(Math.random()*3);

var answer;

var message;


while(true)
{
  answer= parseInt(window.prompt('数あてゲーム　0～2'));
  if(answer===number)
 {
  message='あたり';
  break;
 }
 else if(answer<number)
 {
 message='もっと大きいよ';
 }
 else if(answer>number)
 {
  message='もっと小さいよ';
 }
  else
 {
  message='0～2を入れてね';
 }
  document.getElementById('choice').textContent=message;
}
document.getElementById('choice').textContent=message;
