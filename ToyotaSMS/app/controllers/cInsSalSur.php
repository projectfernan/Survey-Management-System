<?php

class cInsSalSur extends Controller {
    public function cfInsSalSur()
    {
        $ajx = Input::get('data');
        $base64 = base64_decode($ajx);
        $json = json_decode($base64,true);
        for($i=0; $i < count($json);$i++)
        {
        $param = array(
            $json[$i]['_qno'],
            $json[$i]['_ans'],
//          $json[$i]['_cusId'],
            Session::get('custId'),
            $json[$i]['_mp'],
            $json[$i]['_tot'],
            $json[$i]['_arrTime']  
        );
        $rs = mtblsalessurvey::mfInsSalSur($param);
        }
        if($rs > 0){
            Session::flush();
            echo "Success";
        }
    }  
}
