<?php

class cDesig extends Controller{
    public static function cfShwDesig(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Settings') == 1){
                return View::make('vDesig');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfRecDesig(){
        $draw = Input::get("draw");
        $spname = "slctDesig(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mDesig::mfRecDesig($spname,$param);
        if(count($res) > 0){
            foreach($res[1] as $count){
                $getRowCount = $count->total_row;
            }
            if($getRowCount == 0){
                $arr = array(
                'draw' => $draw,
                'recordsTotal' => 0,
                'recordsFiltered' => 0,
                'data' => array()
                );
            }
            else{
                $arr = array(
                    'draw' => $draw,
                    'recordsTotal' => $getRowCount,
                    'recordsFiltered' => $getRowCount,
                    'data' => $res[0]
                );
            }
        }else{
            $var = 'Error';
            echo '<script>console.log(' . json_encode( $var ) . ')</script>';
        }
        return json_encode($arr);
    }
    
    public function cfInsDesig()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_Desig']);
        $rs = mDesig::mfChkDesig($rjs);
             
        if(count($rs) > 0){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_Desig'],
                $js['_SurRec'],
                $js['_CustRec'],
                $js['_Q'],
                $js['_CustRep'],
                $js['_TOT'],
                $js['_VU'],
                $js['_Rep'],
                $js['_SS'],
            );

            $rsm = mDesig::mfInsDesig($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfGetDesig(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_DesigId']);
        $rs = mDesig::mfChkDesig($rjs);
             
        if(count($rs) > 0){
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
    }
    
    public function cfEdtDesig(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);

        $param = array(
            $js['_DesigId'],
            $js['_Desig'],
//            $js['_SurRec'],
            $js['_CustRec'],
            $js['_Q'],
            $js['_CustRep'],
            $js['_TOT'],
            $js['_VU'],
            $js['_Rep'],
            $js['_SS']
        );

        $rsm = mDesig::mfEdtDesig($param);

        if($rsm > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }  
    }
    
    public function cfDelDesig()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_Desig']);
            $rsm = mDesig::mfDelDesig($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
    
    public static function cfRestri(){
        if (Session::has('Desig')){
            $param = array(Session::get('Desig'));
            
            $rs = mDesig::mfChkDesig($param);
            
            if (count($rs) > 0){
                foreach($rs as $r){
                    Session::put('SurRec',$r->SurveyRec);
                    Session::save();
                    Session::put('CustRec',$r->CustRec);
                    Session::save();
                    Session::put('Ques',$r->Questions);
                    Session::save();
                    Session::put('CustRep',$r->CustRep);
                    Session::save();
                    Session::put('Tot',$r->TypeOfTrans);
                    Session::save();
                    Session::put('VehUnit',$r->VehUnit);
                    Session::save();
                    Session::put('Reports',$r->Reports);
                    Session::save();
                    Session::put('Settings',$r->Settings);
                    Session::save();
                }
                return json_encode($rs);
            }
        }
    }
}
