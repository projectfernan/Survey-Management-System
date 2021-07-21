<?php
class cInsCust extends Controller{
    
    public static function cfVehModel()
    {
        $rs = mtblvehmodel::mfGetVehModel();
        if (count($rs)> 0 ){
            return View::make('vNewCust',array(
                'Model'=>$rs
            ));
        }
    }
    
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
            Session::forget('sPlate');
            Session::save();
            Session::put('sPlate',$pno);
            Session::save();
            
            $param = array(
                $js['_Name'],
                $js['_NikName'],
                $js['_Bday'],
                $js['_Stat'],
                $js['_Contact'],
                $js['_Email'],
                $js['_Add'],
                $js['_Comp'],
                $js['_CompAdd'],
                $js['_Occu'],
                $js['_Field'],
                $js['_Plate'],
                $js['_Unit'],
                $js['_Usage'],
                $js['_Sports'],
                $js['_Interest']
            );

            $rsm = mtblcustomer::mfInsCust($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
}
