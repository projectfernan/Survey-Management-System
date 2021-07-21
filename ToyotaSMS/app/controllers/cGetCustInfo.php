<?php
class cGetCustInfo extends Controller{
    public function cfgetCustInfo()
    {
       Session::flush();
       $ajx = Input::get('data');
//       $base64 = base64_decode($ajx);
       $js = json_decode($ajx,true);
       $rjs = array($js['_pno']);
       
       $rs = mtblcustomer::mfCustInfo($rjs);
       if(count($rs) > 0){
             foreach($rs as $r)
            {
               $id = $r->id;
            }
            
            Session::flush();
            Session::put('custId',$id);
           
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
      
    }
    
    public function cfGetnCustInfo()
    {
       $rjs = array(Session::get('sPlate'));
       $rs = mtblcustomer::mfCustInfo($rjs);
       
       if(count($rs) > 0){
            foreach($rs as $r)
            {
               $id = $r->id;
            }
               Session::flush();
               Session::put('custId',$id);
               echo "Success";
//               return view('ServiceSurvey');
        }
        else{
            return "NoRec";
        }
    }
}
