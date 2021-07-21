<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Servicesurvey extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
            DB::table('tblservicesurvey')->insert(array(
                'Qno'=> '4',
                'Ans'=> 'Yes',
                'CusId'=> '3',
                'MktgProf'=> '4',
                'ArrivalTime'=> date('Y-m-d H:m:s'),
                'SurveyDate'=> date('Y-m-d H:m:s')
            ));
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
