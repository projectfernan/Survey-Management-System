<?php

class cServiceSurQ extends Controller {
    public function cfNewServiceSurQ(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Ques') == 1){
                return View::make('vAddServiceSurQ');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfShowServiceSurQ(){
        if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            if(Session::get('Ques') == 1){
                return View::make('vServiceSurQ');
            }
            else{
                return Response::view('404', "Page Not Found.", 404);
            }
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function cfServiceSurQ(){
        $draw = Input::get("draw");
        $spname = "slcttblservicequestion(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mtblservicequestion::mfServiceSurQ($spname,$param);
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
    
    public function cfChkServiceSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_qNo']);
        $rs = mtblservicequestion::mfChkServiceSurQ($rjs);
        
        if(count($rs) > 0){
                return json_encode($rs);
             }
             else{
                 return "NoRec";
             }
        
    }
    
    public function cfInsServiceSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
        $rjs = array($js['_No']);
        $rs = mtblservicequestion::mfChkServiceSurQ($rjs);
        
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

            $rsm = mtblservicequestion::mfInsServiceSurQ($param);

            if($rsm > 0){
                echo "Success";
            }
        }
    }
    
    public function cfEdtServiceSurQ()
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

            $rsm = mtblservicequestion::mfEdtServiceSurQ($param);

            if($rsm > 0){
                echo "Success";
            }
    }
    
    public function cfDelServiceSurQ()
    {
        $ajx = Input::get('data');
        //$base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array($js['_qNo']);
            $rsm = mtblservicequestion::mfDelServiceSurQ($param);
            
            if($rsm > 0){
                echo "Success";
            }
    }
    
}
