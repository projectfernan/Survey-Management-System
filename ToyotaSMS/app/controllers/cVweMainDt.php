<?php

class cVweMainDt extends Controller {
   public function cfVweMainDt()
    {
       if (Session::has('Desig') && Session::has('User') && Session::has('Name')){
            return View::make('vMain');
        }
        else{
           return View::make('vLogin');
        }
    }
    
    public function ReadSalSur(){
        $draw = Input::get("draw");
        $spname = "slctcustsalsur(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mVweSalesSurvey::mfVweCustSalSur($spname,$param);
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
    
    public function ReadSerSur(){
        $draw = Input::get("draw");
        $spname = "slctcustsersur(?,?,?)";
        $search = Input::get("search");
        $param = array(
            Input::get("start"),
            Input::get("length"),
            $search["value"]
        );
        $res = mVweServiceSurvey::mfVweCustSerSur($spname,$param);
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
    
    public function cfCustSalAns(){
        
        $ajx = Input::get('data');
//        $base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array(
                $js['_plate'],
                $js['_SurDT']
            );
//            echo $param;
            $rs = mVweSalesSurvey::mfSalAns($param);
//            
            if(count($rs) > 0){
                return json_encode($rs);
             }
             else{
                 return "NoRec";
             }
        }
        
        public function cfCustSerAns(){
        
        $ajx = Input::get('data');
//        $base64 = base64_decode($ajx);
        $js = json_decode($ajx ,true);
        
            $param = array(
                $js['_plate'],
                $js['_SurDT']
            );
//            echo $param;
            $rs = mVweServiceSurvey::mfSerAns($param);
//            
            if(count($rs) > 0){
                return json_encode($rs);
             }
             else{
                 return "NoRec";
             }
        }
        
}
