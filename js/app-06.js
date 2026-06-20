function drawWarm(ctx, w, h, data, copy, u) {
  ctx.fillStyle = '#fff8ef'; ctx.fillRect(0, 0, w, h);
  drawPaw(ctx, w*.86, h*.15, 170*u, '#e9825a', .07); drawPaw(ctx, w*.14, h*.82, 130*u, '#9dbf9e', .07);
  const m = Math.max(26*u, Math.min(w,h)*.055); const x=m, y=m, cw=w-m*2, ch=h-m*2;
  ctx.shadowColor='rgba(58,42,34,.10)';ctx.shadowBlur=30*u;ctx.shadowOffsetY=12*u;roundedRect(ctx,x,y,cw,ch,38*u,'#fff');ctx.shadowColor='transparent';
  const pad=54*u; drawBadge(ctx, optionLabel('animal',data.animal),x+pad,y+pad,'#c96a48','#fff0e4',u);
  drawBadge(ctx, optionLabel('condition',data.condition),x+cw-pad,y+pad,'#6f7f59','#edf4e8',u,'right');
  const contentW=cw-pad*2; let ty=y+ch*.2;
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,64);ty=drawWrapped(ctx,copy.title,x+pad,ty,contentW,72*u,2);
  ctx.fillStyle='#745f52';ctx.font=bodyFont(u,31);ty=drawWrapped(ctx,copy.cardBody,x+pad,ty+26*u,contentW,47*u,Math.min(lineLimit(data),h/w>1.5?9:6));
  const infoY=Math.max(ty+30*u,y+ch*.63); drawInfoChips(ctx,data,copy,x+pad,infoY,contentW,u);
  drawContact(ctx,copy,x+pad,y+ch-160*u,contentW,u,'#fff0e5');
  ctx.fillStyle='#9a705c';ctx.font=bodyFont(u,22,600);drawWrapped(ctx,`“${copy.paw}”`,x+pad,y+ch-86*u,contentW,30*u,2);
  drawFooter(ctx,x+pad,y+ch-43*u,contentW,u);
}

function drawJournal(ctx, w, h, data, copy, u) {
  ctx.fillStyle='#f9efe2';ctx.fillRect(0,0,w,h);ctx.fillStyle='rgba(201,106,72,.16)';
  for(let x=25*u;x<w;x+=55*u)for(let y=28*u;y<h;y+=55*u){ctx.beginPath();ctx.arc(x,y,3*u,0,Math.PI*2);ctx.fill();}
  ctx.save();ctx.translate(w/2,h/2);ctx.rotate(-.012);const pw=w*.84,ph=h*.84,px=-pw/2,py=-ph/2;
  ctx.shadowColor='rgba(58,42,34,.13)';ctx.shadowBlur=28*u;ctx.shadowOffsetY=13*u;roundedRect(ctx,px,py,pw,ph,12*u,'#fffcf6');ctx.shadowColor='transparent';
  ctx.fillStyle='rgba(246,194,139,.72)';ctx.save();ctx.rotate(.035);roundedRect(ctx,-120*u,py-18*u,240*u,58*u,5*u,'rgba(246,194,139,.72)');ctx.restore();
  ctx.strokeStyle='#e8d5c4';ctx.setLineDash([10*u,10*u]);ctx.lineWidth=2*u;roundedRect(ctx,px+28*u,py+28*u,pw-56*u,ph-56*u,10*u,null,'#e8d5c4',2*u);ctx.setLineDash([]);
  const pad=65*u,cx=px+pad,cw=pw-pad*2;drawBadge(ctx,state.lang==='zh'?'今日记录':'TODAY’S NOTE',cx,py+72*u,'#7a614e','#f4e1c5',u);
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,58,800);let ty=drawWrapped(ctx,copy.title,cx,py+150*u,cw,68*u,2);
  ctx.strokeStyle='#e9825a';ctx.lineWidth=5*u;ctx.beginPath();ctx.moveTo(cx,ty+15*u);ctx.lineTo(cx+cw*.36,ty+15*u);ctx.stroke();
  ctx.fillStyle='#6f5b50';ctx.font=bodyFont(u,30);ty=drawWrapped(ctx,copy.cardBody,cx,ty+42*u,cw,46*u,Math.min(lineLimit(data),7));
  drawInfoChips(ctx,data,copy,cx,Math.max(ty+24*u,py+ph*.64),cw,u,{bg:'#eef3e8',text:'#627553'});
  ctx.fillStyle='#c96a48';ctx.font=bodyFont(u,24,700);drawWrapped(ctx,copy.paw,cx,py+ph-125*u,cw,32*u,2);
  drawFooter(ctx,cx,py+ph-62*u,cw,u);ctx.restore();
}

function drawNotice(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);const head=Math.max(160*u,h*.17);ctx.fillStyle='#e9825a';ctx.fillRect(0,0,w,head);
  drawPaw(ctx,w*.88,head*.52,110*u,'#fff',.2);ctx.fillStyle='#fff';ctx.font=bodyFont(u,25,800);ctx.fillText(state.lang==='zh'?'流浪动物求助':'STRAY ANIMAL HELP',65*u,46*u);
  ctx.font=titleFont(u,55);drawWrapped(ctx,copy.title,65*u,88*u,w-130*u,62*u,2);
  const m=58*u,g=18*u,top=head+42*u,boxW=w-m*2;
  const sections=[
    [state.lang==='zh'?'情况':'SITUATION',copy.condition],
    [state.lang==='zh'?'信息':'INFO',`${optionLabel('animal',data.animal)} · ${optionLabel('age',data.age)} · ${copy.location}`],
    [state.lang==='zh'?'需要帮助':'HELP NEEDED',copy.help]
  ];
  const available=h-top-190*u;const boxH=Math.max(130*u,(available-g*2)/3);
  sections.forEach(([label,value],i)=>{const y=top+i*(boxH+g);roundedRect(ctx,m,y,boxW,boxH,18*u,'#fff8ef','#ead8ca',2*u);ctx.fillStyle='#c96a48';ctx.font=bodyFont(u,21,800);ctx.fillText(label,m+26*u,y+22*u);ctx.fillStyle='#3a2a22';ctx.font=bodyFont(u,29,650);drawWrapped(ctx,value,m+26*u,y+56*u,boxW-52*u,39*u,2);});
  drawContact(ctx,copy,m,h-123*u,boxW,u,'#e9825a','#fff');drawFooter(ctx,m,h-45*u,boxW,u,'#7a6a5e','center');
}

function drawCute(ctx,w,h,data,copy,u){
  ctx.fillStyle='#fff3ea';ctx.fillRect(0,0,w,h);drawHeart(ctx,w*.13,h*.16,54*u,'#f4b8a8',.55);drawPaw(ctx,w*.87,h*.2,100*u,'#e9825a',.14);drawPaw(ctx,w*.1,h*.78,120*u,'#9dbf9e',.12);
  for(const [x,y,c] of [[.88,.72,'#f4b8a8'],[.17,.33,'#f6c28b'],[.81,.43,'#9dbf9e']]){ctx.fillStyle=c;ctx.globalAlpha=.28;ctx.beginPath();ctx.arc(w*x,h*y,18*u,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;}
  const m=68*u,cw=w-m*2;roundedRect(ctx,m,65*u,cw,h*.27,54*u,'#fff');
  ctx.beginPath();ctx.moveTo(m+cw*.22,65*u+h*.27);ctx.lineTo(m+cw*.29,65*u+h*.27);ctx.lineTo(m+cw*.24,65*u+h*.32);ctx.fillStyle='#fff';ctx.fill();
  ctx.fillStyle='#3a2a22';ctx.font=titleFont(u,61,850);drawWrapped(ctx,copy.title,m+46*u,118*u,cw-92*u,68*u,2);
  const bodyY=h*.39;roundedRect(ctx,m,bodyY,cw,h*.41,34*u,'rgba(255,255,255,.92)');ctx.fillStyle='#695246';ctx.font=bodyFont(u,31);let ty=drawWrapped(ctx,copy.cardBody,m+46*u,bodyY+46*u,cw-92*u,46*u,Math.min(lineLimit(data),7));
  drawInfoChips(ctx,data,copy,m+46*u,Math.max(ty+26*u,bodyY+h*.25),cw-92*u,u,{bg:'#fff0e7',text:'#8c5841'});
  ctx.fillStyle='#9b6651';ctx.font=bodyFont(u,25,700);drawWrapped(ctx,copy.paw,m,h*.84,cw,34*u,2,'center');drawFooter(ctx,m,h-54*u,cw,u,'#9a7d6c','center');
}

function drawGreen(ctx,w,h,data,copy,u){
  ctx.fillStyle='#f3f7ee';ctx.fillRect(0,0,w,h);drawLeaf(ctx,70*u,280*u,210*u,'rgba(111,154,115,.35)',1);drawLeaf(ctx,w-60*u,h-90*u,235*u,'rgba(111,154,115,.28)',-1);
  const m=65*u;roundedRect(ctx,m,72*u,w-m*2,h-144*u,36*u,'rgba(255,252,246,.94)');
  drawBadge(ctx,state.lang==='zh'?'温柔求助':'A GENTLE REQUEST',m+50*u,125*u,'#55775a','#dfead7',u);
  ctx.fillStyle='#2e352b';ctx.font=titleFont(u,62);let ty=drawWrapped(ctx,copy.title,m+50*u,215*u,w-m*2-100*u,70*u,2);
  ctx.fillStyle='#5f6d5b';ctx.font=bodyFont(u,30);ty=drawWrapped(ctx,copy.cardBody,m+50*u,ty+35*u,w-m*2-100*u,46*u,Math.min(lineLimit(data),8));
  drawInfoChips(ctx,data,copy,m+50*u,Math.max(ty+34*u,h*.65),w-m*2-100*u,u,{bg:'#dfead7',text:'#526c54'});
  ctx.fillStyle='#6f9a73';ctx.font=bodyFont(u,25,700);drawWrapped(ctx,`“${copy.paw}”`,m+50*u,h-165*u,w-m*2-100*u,34*u,2);
  drawFooter(ctx,m+50*u,h-92*u,w-m*2-100*u,u,'#6d7668');
}


