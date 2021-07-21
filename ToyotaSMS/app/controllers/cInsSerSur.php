<?php

class cInsSerSur extends Controller {
    public function cfInsSerSur()
    {
        $res = Input::get('data');
        $base64 = base64_decode($res);
        $json = json_decode($base64,true);
        for($i=0; $i < count($json);$i++)
        {
        $param = array(
            $json[$i]['_qno'],
            $json[$i]['_ans'],
//          $json[$i]['_cusId'],
            Session::get('custId'),
            $json[$i]['_adv'],
            $json[$i]['_arrTime']  
        );
        $res = mtblservicesurvey::mfInsSerSur($param);
        }
        if($res > 0){
            Session::flush();
            echo "Success";
        }
    }  
}
