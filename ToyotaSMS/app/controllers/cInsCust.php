<?php
class cInsCust extends Controller{
    public static function cfInsCust(){
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $js = json_decode($base64 ,true);
        
        $rjs = array($js['_Plate']);
        $rs = mtblcustomer::mfCustInfo($rjs);
        
        foreach($rs as $r)
            {
               $id = $r->id;
            }
        
        if($id != ''){
             echo "Exist";
        }
        else{
            $pno = $js['_Plate'];
            Session::flush();
            Session::put('sPlate',$pno);
            
            $param = array(
                $js['_Name'],
                $js['_Plate'],
                $js['_Contact']
            );

            $rsm = mtblcustomer::mfInsCust($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
}
