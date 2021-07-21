<?php

class cTypeOfTrans extends Controller{
    public static function cfShwTypeOfTrans(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Tot') == 1){
                return View::make('vTypeOfTrans');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfTypeOfTrans(){
        $draw = Input::get("draw");
        $spname = "slctTypeOfTrans(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtbltypeoftrans::mfTypeOfTrans($spname,$param);
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
    
    public function cfInsTypeOfTrans()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_TypeOfTrans']);
        $rs = mtbltypeoftrans::mfGetTypeOfTrans($rjs);
             
        if(count($rs) > 0){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_TypeOfTrans']
            );

            $rsm = mtbltypeoftrans::mfInsTypeOfTrans($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfEdtTypeOfTrans()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $param = array(
            $js['_TotId'],
            $js['_TypeOfTrans']
        );

        $rsm = mtbltypeoftrans::mfEdtTypeOfTrans($param);

        if($rsm > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }
        
    }
    
    public function cfDelTypeOfTrans()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_ToT']);
            $rsm = mtbltypeoftrans::mfDelTypeOfTrans($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
}
