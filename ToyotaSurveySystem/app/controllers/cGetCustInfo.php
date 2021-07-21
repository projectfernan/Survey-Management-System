<?php
class cGetCustInfo extends Controller{
    public function cfgetCustInfo()
    {
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
            
            Session::forget('custId');
            Session::save();
            Session::put('custId',$id);
            Session::save();
            
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
               Session::forget('custId');
               Session::save();
               Session::put('custId',$id);
               Session::save();
               echo "Success";
//               return view('ServiceSurvey');
        }
        else{
            return "NoRec";
        }
    }
}
