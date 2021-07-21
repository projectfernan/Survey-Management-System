<?php
class mtblsalesquestion {
    public static function mfgetsalesQ(){
        $rs = DB::select("call appSalesQuestion");
        return $rs;
    }
}
