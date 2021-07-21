<?php

class mtblmktgprof {
    public static function mfGetmktgprof(){
        $rs = DB::select('select MktgProf from tblmktgprof order by MktgProf');
        Return $rs;
    }
}
