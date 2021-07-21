<?php

class cAcc extends Controller{
    public static function cfShwNewAcc(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Settings') == 1){
                $rs = mDesig::mfListDesig();
                if (count($rs) > 0 ){
                    return View::make('vNewAcc',array(
                        'Desig'=>$rs
                    ));
                }
            }
            else{
                 return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public static function cfShwAcc(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Settings') == 1){
                 $rs = mDesig::mfListDesig();
                if (count($rs) > 0 ){
                    return View::make('vAccounts',array(
                        'Desig'=>$rs));
                }
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfRecAcc(){
        $draw = Input::get("draw");
        $spname = "slctAccRec(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtblaccounts::mfRecAcc($spname,$param);
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
    
    
    public static function cfInsAcc()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $inp = json_decode($base64 ,true);
        
        $Uid = array($inp['_Uid']);
        $chk = mtblaccounts::mfChkAcc($Uid);

        if (count($chk) > 0){
            return "Exist";
        }
        else{
            $param = array(
                $inp['_Uid'],
                $inp['_Pwd'],
                $inp['_Name'],
                $inp['_Desig']
            );

            $rs = mtblaccounts::mfInsAcc($param);

            if($rs > 0){
                echo "Success";
            }
            else{
                echo "Failed";
            }
        }
    }
    
    public function cfChkAcc(){
        $ajx = Input::get('data');
        $b64 = base64_decode($ajx);
        $js = json_decode($b64,true);
        
        $Uid = array($js['_Uid']);
        $rs = mtblaccounts::mfChkAcc($Uid);
   
        if (count($rs) > 0){
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
    }
    
    public static function cfEdtAcc()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $inp = json_decode($base64 ,true);
        
        $param = array(
            $inp['_Uid'],
            $inp['_Name'],
            $inp['_Desig']
        );

        $rs = mtblaccounts::mfEdtAcc($param);

        if($rs > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
    
    public static function cfChkOldPwd()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $inp = json_decode($base64 ,true);
        
        $param = array(
            $inp['_Uid'],
            $inp['_OldPwd']
        );

        $rs = mtblaccounts::mfGetAcc($param);

        if(count($rs) > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
    
    public static function cfChangePwd()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $inp = json_decode($base64 ,true);
        
        $param = array(
            $inp['_Uid'],
            $inp['_NewPwd']
        );

        $rs = mtblaccounts::mfChangePwd($param);

        if($rs > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
    
    public static function cfDelAcc()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $inp = json_decode($base64 ,true);
        
        $param = array(
            $inp['_Uid']
        );

        $rs = mtblaccounts::mfDelAcc($param);

        if($rs > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
}

