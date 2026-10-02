const scenes = [

{
year:"1952",
title:"Early Life",
text:"Imran Khan was born in Lahore on 5 October 1952. His early years began a life that would later span sport, philanthropy and politics.",
caption:"Early life • Lahore"
},

{
year:"1960s–70s",
title:"Education",
text:"He studied at Aitchison College in Lahore and later attended the University of Oxford, where he studied Philosophy, Politics and Economics.",
caption:"Education • Pakistan & Oxford"
},

{
year:"1971",
title:"International Cricket",
text:"His international cricket career began in the early 1970s. He developed into an all-rounder and later became one of Pakistan's most prominent cricket captains.",
caption:"Cricket • International career"
},

{
year:"1982",
title:"Captain of Pakistan",
text:"He became captain of Pakistan and led a generation of players during a major period in the country's cricket history.",
caption:"Cricket • Captaincy"
},

{
year:"1992",
title:"The World Cup",
text:"As captain, Imran Khan led Pakistan to its first Cricket World Cup title in 1992. He retired from international cricket after the tournament.",
caption:"Cricket • 1992 World Cup"
},

{
year:"1990s",
title:"A New Chapter",
text:"After cricket, public attention increasingly turned to his charitable and educational projects, alongside his growing public profile.",
caption:"Public life • Philanthropy"
},

{
year:"1994",
title:"Shaukat Khanum",
text:"Shaukat Khanum Memorial Cancer Hospital was established in Lahore in 1994. The project became a major part of his philanthropic work.",
caption:"Philanthropy • Healthcare"
},

{
year:"2008",
title:"Namal",
text:"Namal University was established in Mianwali, expanding his education-focused philanthropic work.",
caption:"Education • Namal"
},

{
year:"1996",
title:"Entering Politics",
text:"Pakistan Tehreek-e-Insaf (PTI) was founded in 1996. Imran Khan became the party's central political figure.",
caption:"Politics • PTI founded"
},

{
year:"2013",
title:"Political Expansion",
text:"PTI became a significant political force, particularly after the 2013 general election, when it emerged as one of Pakistan's major parties.",
caption:"Politics • Electoral growth"
},

{
year:"2018",
title:"Prime Minister",
text:"Following the 2018 general election, Imran Khan became Prime Minister of Pakistan and served from August 2018 to April 2022.",
caption:"Government • 2018–2022"
},

{
year:"2019",
title:"International Spotlight",
text:"During his premiership, Pakistan's domestic policies and foreign relations remained subjects of extensive public and international attention.",
caption:"Government • Foreign & domestic affairs"
},

{
year:"2022",
title:"A Political Turning Point",
text:"In April 2022, Imran Khan left office after losing a vote of no confidence in the National Assembly.",
caption:"Politics • April 2022"
},

{
year:"2023",
title:"Legal & Political Developments",
text:"The period after his premiership brought major legal cases, political disputes and continuing public attention around his party and political status.",
caption:"Politics • Legal developments"
},

{
year:"2024",
title:"Election Year",
text:"Pakistan held a general election in February 2024 amid a highly contested political environment. PTI-backed candidates participated as independents.",
caption:"Politics • 2024 election"
},

{
year:"Today",
title:"An Ongoing Public Story",
text:"Imran Khan remains a major figure in Pakistan's public life. His career continues to be discussed through the lenses of cricket, philanthropy, government and politics.",
caption:"Present • Public life"
}

];

let i = 0;
let timer = null;
let paused = false;

const $ = id => document.getElementById(id);

function render(){

  const s = scenes[i];

  $("counter").textContent =
    `${String(i+1).padStart(2,"0")} / ${scenes.length}`;

  $("year").textContent = s.year;
  $("title").textContent = s.title;
  $("text").textContent = s.text;
  $("caption").textContent = s.caption;

  $("bar").style.width =
    `${((i+1)/scenes.length)*100}%`;

  const hue = (i * 29) % 360;

  document.querySelector(".scene-bg").style.background =
    `radial-gradient(
      circle at ${20+(i*7)%65}% ${25+(i*11)%45}%,
      hsl(${hue} 30% 28%),
      #101522 40%,
      #07090e 82%
    )`;

  $("visual").innerHTML = `
    <span class="orb one"></span>
    <span class="orb two"></span>
    <span
      class="line"
      style="left:${10+i*3}%;top:35px;width:${35+i*2}%">
    </span>
    <span
      class="line"
      style="left:${20+i*2}%;top:75px;width:${20+i*3}%">
    </span>
    <span class="scene-number">
      ${String(i+1).padStart(2,"0")}
    </span>
  `;
}

function startAuto(){

  clearInterval(timer);

  timer = setInterval(() => {

    if(!paused){

      if(i < scenes.length - 1){

        i++;
        render();

      }else{

        clearInterval(timer);
        paused = true;
        $("pause").textContent = "↻";

      }

    }

  },6500);
}

$("start").onclick = () => {

  $("intro").classList.add("hidden");
  $("story").classList.remove("hidden");

  render();
  startAuto();

};

$("next").onclick = () => {

  if(i < scenes.length - 1){

    i++;
    render();
    startAuto();

  }

};

$("prev").onclick = () => {

  if(i > 0){

    i--;
    render();
    startAuto();

  }

};

$("pause").onclick = () => {

  paused = !paused;

  $("pause").textContent =
    paused ? "▶" : "Ⅱ";

};

$("mute").onclick = () => {

  $("mute").textContent =
    $("mute").textContent === "🔊"
      ? "🔇"
      : "🔊";

};
