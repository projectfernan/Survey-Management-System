<?php

class mtblcustomer {
    public static function mfCustInfo($plate){
        $rs = DB::select('call slctcustomer(?)',$plate);
        Return $rs;
    }
    
    public static function mfInsCust($param){
        $rs = DB::insert('call insCust(?,?,?)',$param);
        Return $rs;
    }
    
    public static function mfCustRec($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
}
