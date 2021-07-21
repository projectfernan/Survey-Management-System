<?php

class mtblvehmodel {

    public static function mfGetVehModel(){
        $rs = DB::select('call slctvehmodel');
        Return $rs;
    }

}
