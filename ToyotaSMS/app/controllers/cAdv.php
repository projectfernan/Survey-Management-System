<?php

class cAdv extends Controller{
    public static function cfShwAdv(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('CustRep') == 1){
                return View::make('vAdv');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfRecAdv(){
        $draw = Input::get("draw");
        $spname = "slctAdv(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtblseradvisor::mfRecAdv($spname,$param);
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
    
    public function cfInsAdv()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array(
            $js['_Adv']);
        $rs = mtblseradvisor::mfChkAdv($rjs);
             
        if(count($rs) > 0){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_Adv'],
                $js['_Gend']
            );

            $rsm = mtblseradvisor::mfInsAdv($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfGetAdv(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_AdvId']);
        $rs = mtblseradvisor::mfChkAdv($rjs);
             
        if(count($rs) > 0){
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
    }
    
    public function cfEdtAdv(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $param = array(
            $js['_AdvId'],
            $js['_Adv'],
            $js['_Gend']
        );

        $rsm = mtblseradvisor::mfEdtAdv($param);

        if($rsm > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }  
    }
    
    public function cfDelAdv()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_Adv']);
            $rsm = mtblseradvisor::mfDelAdv($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
    
}
