<?php

class mDesig {
    public static function mfRecDesig($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkDesig($param){
        $rs = DB::select('call chkDesig(?)',$param);
        Return $rs;
    }
    
    public static function mfInsDesig($param){
        $rs = DB::insert('call insDesig(?,?,?,?,?,?,?,?,?)',$param);
        Return $rs;
    }
    
    public static function mfEdtDesig($param){
        $rs = DB::insert('call editDesig(?,?,?,?,?,?,?,?,?)',$param);
        Return $rs;
    }
    
    public static function mfDelDesig($param){
        $rs = DB::select('call delDesig(?)',$param);
        Return $rs;
    }
    
    public static function mfListDesig(){
        $rs = DB::select('call ListDesig');
        Return $rs;
    }
}
