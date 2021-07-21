<?php

class mtblmktgprof {
    public static function mfRecMktg($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkMktg($param){
        $rs = DB::select('call chkMktg(?)',$param);
        Return $rs;
    }
    
    public static function mfInsMktg($param){
        $rs = DB::insert('call insMktg(?,?)',$param);
        Return $rs;
    }
    
    public static function mfEdtMktg($param){
        $rs = DB::insert('call editMktg(?,?,?)',$param);
        Return $rs;
    }
    
    public static function mfDelMktg($param){
        $rs = DB::select('call delMktg(?)',$param);
        Return $rs;
    }
}
