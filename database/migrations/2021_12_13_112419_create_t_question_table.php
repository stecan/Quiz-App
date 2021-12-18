<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTQuestionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('t_question', function (Blueprint $table) {
            $table->id();
            $table->char('q_id',2);
            $table->char('q_kbn',1);
            $table->boolean('a_disp_flg');
            $table->string('q_text',300);
            $table->string('option_1',50);
            $table->boolean('option_1_selected');
            $table->string('option_2',50);
            $table->boolean('option_2_selected');
            $table->string('option_3',50);
            $table->boolean('option_3_selected');
            $table->string('explanation',300);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('t_question');
    }
}
