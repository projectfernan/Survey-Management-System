<?php
class cVweSalesSurQ extends Controller {
    
    public function cfShowSalesSurQ(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Ques') == 1){
                return View::make('vSalesSurQ');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            } 
        }
        else{
            return View::make('vLogin');
        }
    }
    
    public function cfNewSalesSurQ(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Ques') == 1){
                return View::make('vAddSalesSurQ');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
            return View::make('vLogin');
        }
    }
    
    public function cfChkSalesSurQ(){
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_qNo']);
        $rs = mtblsalesquestion::mfChkSalesSurQ($rjs);
        
        if(count($rs) > 0){
            return json_encode($rs);
        }
        else{
            return "NoRec";
        }
    }
    
    public function cfInsSalesSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_No']);
        $rs = mtblsalesquestion::mfChkSalesSurQ($rjs);
        
         foreach($rs as $r)
            {
               $id = $r->id;
            }
            
        if($id != ''){
            echo "Existing";
        }
        else{
           
            $param = array(
                $js['_No'],
                $js['_SurveyQ'],
                $js['_AnsTyp'],
                $js['_Grp']
            );

            $rsm = mtblsalesquestion::mfInsSalesSurQ($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfEdtSalesSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array(
                $js['_No'],
                $js['_SurveyQ'],
                $js['_AnsTyp'],
                $js['_Grp']
            );

            $rsm = mtblsalesquestion::mfEdtSalesSurQ($param);

            if($rsm > 0){
                echo "Success";
            }
    }
   
    public function cfDelSalesSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_qNo']);
            $rsm = mtblsalesquestion::mfDelSalesSurQ($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
    
    public function cfVweSalesSurQ(){
        $draw = Input::get("draw");
        $spname = "slcttblsalesquestion(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtblsalesquestion::mfVweSalesSurQ($spname,$param);
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
}
