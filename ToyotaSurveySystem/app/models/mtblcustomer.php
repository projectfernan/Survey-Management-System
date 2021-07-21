<?php

class mtblcustomer {
    public static function mfCustInfo($plate){
        $rs = DB::select('call slctcustomer(?)',$plate);
        Return $rs;
    }
    
    public static function mfInsCust($param){
        $rs = DB::insert('call insCust(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',$param);
        Return $rs;
    }
}
