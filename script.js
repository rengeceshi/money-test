function startTest(){

let year=document.getElementById("year").value;
let month=document.getElementById("month").value;
let day=document.getElementById("day").value;

if(year=="" || month=="" || day==""){

alert("请输入完整生日");

return;

}

let num=parseInt(year)+parseInt(month)+parseInt(day);

let result=num%4;

let type="";
let desc="";
let fail="";
let job="";
let key="";

if(result==0){

type="行动赚钱型";
desc="执行力强，适合项目赚钱";
fail="容易冲动，缺少规划";
job="销售、自媒体、副业";
key="行动、执行、速度";

}

if(result==1){

type="稳定积累型";
desc="适合长期稳定赚钱";
fail="容易保守错失机会";
job="长期副业、内容积累";
key="稳定、积累、复利";

}

if(result==2){

type="表达赚钱型";
desc="适合靠内容赚钱";
fail="容易三分钟热度";
job="自媒体、短视频";
key="表达、流量、影响力";

}

if(result==3){

type="思考赚钱型";
desc="适合认知赚钱";
fail="容易想太多";
job="信息差、咨询";
key="认知、分析、策略";

}

localStorage.setItem("type",type);
localStorage.setItem("desc",desc);
localStorage.setItem("fail",fail);
localStorage.setItem("job",job);
localStorage.setItem("key",key);

window.location.href="result.html";

}
