<?php
class mtblservicequestion {
    public static function mfgetserviceQ(){
        $rs = DB::select("call appServiceQuestion");
        return $rs;
    }
}
