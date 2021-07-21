<?php

class cUnitModel extends Controller{
    public static function cfShwUM(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('VehUnit') == 1){
                return View::make('vUnitModel');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfRecUM(){
        $draw = Input::get("draw");
        $spname = "slctUnitModel(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mUnitModel::mfrecUM($spname,$param);
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
    
    public function cfInsUM()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_UM']);
        $rs = mUnitModel::mfChkUM($rjs);
             
        if(count($rs) > 0){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_UM']
            );

            $rsm = mUnitModel::mfInsUM($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfEdtUM()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $param = array(
            $js['_UmId'],
            $js['_UM']
        );

        $rsm = mUnitModel::mfEdtUM($param);

        if($rsm > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
        
    }
    
    public function cfDelUM()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_UM']);
            $rsm = mUnitModel::mfDelUM($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
}
