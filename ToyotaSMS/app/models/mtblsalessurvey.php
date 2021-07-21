<?php

class mtblsalessurvey {
    public static function mfInsSalSur($param){
        $rs = DB::insert('call insSalSur(?,?,?,?,?,?)',$param);
        Return $rs;
    }
}
