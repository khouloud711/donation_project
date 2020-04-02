$(function(){

  $('[id*=TN-').on('click',function(){
    let regionId = $(this)["0"].id;
    regionId=regionId.replace('TN-','');

    let boucle=true;
    do{
      regionId=regionId.replace('-',' ');
      if(regionId.indexOf('-')==-1)
        boucle=false;
    }while(boucle);

    $('#infoRegion').text(regionId);
    console.log(regionId);


//information
    let regionIn = $(this)["0"].getAttribute('info');
    let boucle2=true;
    do{
      regionIn=regionIn.replace('-',' ');
      regionIn=regionIn.replace('|','\n');
      if(regionIn.indexOf('-')==-1)
        boucle2=false;
    }while(boucle2);

    $('#info').text(regionIn);

  })



})

