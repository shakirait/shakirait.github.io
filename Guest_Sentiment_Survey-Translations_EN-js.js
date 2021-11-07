let regionQuestionText =
  "To better understand where our visitors come from, please select the region you live in";
let townQuestionText =
  "To better understand where our visitors come from, please select the city/county you live in";
let postCodeQuestionText =
  "To better understand where our visitors come from please provide us with your <b>post code</b> : ";

let FVRegionDropDown =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  regionQuestionText +
  " <label id='QUESTION_REGION_OF_RESIDENCE-error' class='error' for='QUESTION_REGION_OF_RESIDENCE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><select name='QUESTION_REGION_OF_RESIDENCE' id='QUESTION_REGION_OF_RESIDENCE' class='required'><option value=''>Please select </option><option value='1'>Alessandria </option><option value='2'>Bergamo</option><option value='3'>Bologna </option><option value='4'>Brescia </option><option value='5'>Cremona</option><option value='6'>Ferrara </option><option value='7'>Greater Milano </option><option value='8'>La Spezia</option><option value='9'>Lodi</option><option value='10'>Mantova </option><option value='11'>Massa-Carrara</option><option value='12'>Modena </option><option value='13'>Novara </option><option value='14'>Other</option><option value='15'>Parma </option><option value='16'>Pavia</option><option value='17'>Piacenza</option><option value='18'>Reggio-Emilia</option><option value='19'>Verona</option></select></div></fieldset>";

let KVRegionDropDown =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  townQuestionText +
  " <label id='QUESTION_REGION_OF_RESIDENCE-error' class='error' for='QUESTION_REGION_OF_RESIDENCE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><select name='QUESTION_REGION_OF_RESIDENCE' id='QUESTION_REGION_OF_RESIDENCE' class='required'><option value=''>Please select </option><option value='1'>Connaught/Ulster</option><option value='2'>Cork</option><option value='3'>Dublin City North</option><option value='4'>Dublin City South</option><option value='5'>Fingal</option><option value='6'>Kildare</option><option value='7'>Limerick</option><option value='8'>Other </option><option value='9'>Rest of Leinster</option><option value='10'>Rest of Munster</option><option value='11'>South County Dublin / Dun Laoghaire  / Rathdown</option></select></div></fieldset>";

let MVRegionDropDown =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  regionQuestionText +
  " <label id='QUESTION_REGION_OF_RESIDENCE-error' class='error' for='QUESTION_REGION_OF_RESIDENCE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><select name='QUESTION_REGION_OF_RESIDENCE' id='QUESTION_REGION_OF_RESIDENCE' class='required'><option value=''>Please select </option><option value='1'> Antwerp </option><option value='2'> Brussels </option><option value='3'> East Flanders </option><option value='4'> Hainaut </option><option value='5'> Leuven </option><option value='6'> Liege </option><option value='7'> Limburg </option><option value='8'> Namur + Brabant Wallon </option><option value='9'> West Flanders </option><option value='10'>Other</option></select></div></fieldset>";

let IVRegionDropDown =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  regionQuestionText +
  " <label id='QUESTION_REGION_OF_RESIDENCE-error' class='error' for='QUESTION_REGION_OF_RESIDENCE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><select name='QUESTION_REGION_OF_RESIDENCE' id='QUESTION_REGION_OF_RESIDENCE' class='required'><option value=''>Please select </option><option value='1'> Baden-Württemberg </option><option value='2'> Berlin </option><option value='3'> Brandenburg </option><option value='4'> Hamburg </option><option value='5'> Niedersachsen </option><option value='6'> Nordrhein-Westfalen </option><option value='7'> Nürnberg </option><option value='8'> Other </option><option value='9'> Other Bayern </option><option value='10'> Other Hessen </option><option value='11'> Region Augsburg </option><option value='12'> Region Ingolstadt </option><option value='13'> Region München </option><option value='14'> Region Regensburg </option><option value='15'> Rheinland-Pfalz </option><option value='16'> Sachsen </option><option value='17'> Sachsen-Anhalt </option><option value='18'> Schleswig-Holstein </option><option value='19'> Thüringen </option></select></div></fieldset>";

let WVRegionDropDown =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  regionQuestionText +
  " <label id='QUESTION_REGION_OF_RESIDENCE-error' class='error' for='QUESTION_REGION_OF_RESIDENCE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><select name='QUESTION_REGION_OF_RESIDENCE' id='QUESTION_REGION_OF_RESIDENCE' class='required'><option value=''>Please select </option><option value='1'> Baden-Württemberg </option><option value='2'> Berlin </option><option value='3'> Brandenburg </option><option value='4'> Hamburg </option><option value='5'> Niedersachsen </option><option value='6'> Nordrhein-Westfalen </option><option value='7'> Nürnberg </option><option value='8'> Other </option><option value='9'> Other Bayern </option><option value='10'> Other Hessen </option><option value='11'> Region Augsburg </option><option value='12'> Region Ingolstadt </option><option value='13'> Region München </option><option value='14'> Region Regensburg </option><option value='15'> Rheinland-Pfalz </option><option value='16'> Sachsen </option><option value='17'> Sachsen-Anhalt </option><option value='18'> Schleswig-Holstein </option><option value='19'> Thüringen </option></select></div></fieldset>";

let ENTextInput =
  "<fieldset id='QUESTION_REGION_OF_RESIDENCE'><legend>" +
  postCodeQuestionText +
  " <label id='QUESTION_POSTAL_CODE-error' class='error' for='QUESTION_POSTAL_CODE' style='display: inline-block;'></label></legend><div class='radio_btn_holder radio_btn_5_liner'><input type='text' name='QUESTION_POSTAL_CODE' id='QUESTION_POSTAL_CODE'  class='required' /></div></fieldset>";
