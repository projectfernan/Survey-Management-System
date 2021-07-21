<?php
class cMktg extends Controller{
    public static function cfShwMktg(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('CustRep') == 1){
                return View::make('vMktg');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfRecMktg(){
        $draw = Input::get("draw");
        $spname = "slctMktg(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtblmktgprof::mfRecMktg($spname,$param);
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
    
    public function cfInsMktg()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array(
            $js['_Mktg']);
        $rs = mtblmktgprof::mfChkMktg($rjs);
             
        if(count($rs) > 0){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_Mktg'],
                $js['_Gend']
            );

            $rsm = mtblmktgprof::mfInsMktg($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfGetMktg(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_MktgId']);
        $rs = mtblmktgprof::mfChkMktg($rjs);
             
        if(count($rs) > 0){
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
    }
    
    public function cfEdtMktg(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $param = array(
            $js['_MktgId'],
            $js['_Mktg'],
            $js['_Gend']
        );

        $rsm = mtblmktgprof::mfEdtMktg($param);

        if($rsm > 0){
            echo "Success";
        }
        else{
            echo "Failed";
        }  
    }
    
    public function cfDelMktg()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_Mktg']);
            $rsm = mtblmktgprof::mfDelMktg($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
    
}
