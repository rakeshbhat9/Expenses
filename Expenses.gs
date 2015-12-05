function expCheck(){
  P1Total();
  P2Total();
  totalSpend();
  perHead();
  whoPayswho();
}

function P1Total() {
  var ss = SpreadsheetApp.getActiveSheet();
  var range = ss.getRange("D2:D" + ss.getLastRow()).getValues();
  //var data = s.getRange("A1:A" + s.getLastRow()).getValues(); **From where I got the idea
  //var values = range.getValues(); ** redundant as this worked in prev method, getRange("A1:C100") now range itself does the job.
  var values_int = range.map(function (x) { 
    return parseFloat(x, 10);});
  var total = 0;  
  for(var i = 0; i <values_int.length; i++) {   
    total += values_int[i];
    ss.getRange("K1").setValue(total);}
}

function P2Total() {
  var ss = SpreadsheetApp.getActiveSheet();
  var range = ss.getRange("H2:H" + ss.getLastRow()).getValues();
  //var data = s.getRange("A1:A" + s.getLastRow()).getValues(); **From where I got the idea
  //var values = range.getValues(); ** redundant as this worked in prev method, getRange("A1:C100") now range itself does the job.
  var values_int = range.map(function (x) { 
    return parseFloat(x, 10);});
  var total = 0;
  for(var i = 0; i <values_int.length; i++) {   
  total += values_int[i];
  ss.getRange("K2").setValue(total);}
}

function totalSpend(){
  var ss = SpreadsheetApp.getActiveSheet();
  var rt = ss.getRange("K2").getValue();
  var pt = ss.getRange("K1").getValue();
  var ts =  rt + pt ;
  ss.getRange("K3").setValue(ts);
}

function perHead(){
  var ss = SpreadsheetApp.getActiveSheet();
  var ts = ss.getRange("K3").getValues();
  var ph = ts / 2;
  ss.getRange("K4").setValue(ph);
}

function whoPayswho(){
  var ss = SpreadsheetApp.getActiveSheet();
  var rt = ss.getRange("K2").getValues();
  var pt = ss.getRange("K1").getValue();
  var ph = ss.getRange("K4").getValue();
  var rn = rt - ph;
  var pn = pt - ph;
  if(rn == 0 && pn == 0){
       ss.getRange("K5").setValue("All good, no one pays anyone anything")}
              else if(rn > pn){
       ss.getRange("K5").setValue("P1 has to pay P2 £"+ (pn*-1).toFixed(2))}
  else {
    ss.getRange("K5").setValue("P2 has to pay P1 £"+ (rn*-1).toFixed(2))
  }
}
