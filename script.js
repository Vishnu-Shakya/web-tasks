// <-----script----->
async function image_update(url){
    const res=await fetch(url,{method:"GET"})
    return res
}

            image_update('https://www.coursehubiitg.in/api/codingweek/contributions')
            .then(res=> res.json())
            .then(data=>{
                // for sorting i use google 
                data.sort((a,b)=>{
                    if(a.points<b.points) return 1;
                    else if(a.points>b.points) return -1;
                    else return 0;
                })
                return data;
            })
            .then(data=>{

                //placing picture corresponding position 
                var avatar=document.getElementById('rank-1-image')
                avatar.src=data[0].avatar
                var avatar=document.getElementById('rank-2-image')
                avatar.src=data[1].avatar
                var avatar=document.getElementById('rank-3-image')
                avatar.src=data[2].avatar

                //this for after top-three
                var score_tag=document.getElementsByClassName('top-3-score')
                const name_tag=document.getElementsByClassName('top-3-name')
                for (let i = 0; i < score_tag.length; i++) {
                    score_tag[i].innerHTML=data[i].points;
                    name_tag[i].innerHTML=data[i].name.split(' ')[0];
                    
                }
                return data
            })
            .then(data=>{
                // created no of box required as per size of data 
                for (let i = 0; i< data.length-4; i++) {
                    var demo_element = document.querySelector('#sample');
                    var clone_ele = demo_element.cloneNode(true);
                    demo_element.after(clone_ele);
                }
                return data
            })
            .then(data=>{
                // for after-ten-rank 
                const score=document.getElementsByClassName('score')
                const name=document.getElementsByClassName('name')
                var avatar=document.getElementsByClassName('avtar')
                const rank=document.getElementsByClassName('rank-after-3')
                for (let i = 0; i < score.length; i++) {
                    score[i].innerHTML=data[i+3].points
                    name[i].innerHTML=data[i+3].name
                    avatar[i].src=data[i+3].avatar
                    rank[i].innerHTML=i+4
                }
            })
            .catch(er=>{
                //this for catching  err show on console
                console.log(er)
            })