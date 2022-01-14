/**
 * Organize your blocks in groups
 */

//% color="#AA278D"
//% groups="['Book-keeping instructions', 'Timing','Symbolic manipulation','Disposal','Declaration of resources','Measurement','Combination & mixing','Temperature & storage','Centrifugation','Detection and analysis']"
namespace BioBlocks {
    //% block="start_protocol protocol_name= $protocol"
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function start_protocol(protocol: string) {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function end_protocol() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function first_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function next_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function optional_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function first_option() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function next_option() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function end_option() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function first_sub_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function next_sub_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function parallel_step() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function comment() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function to_do() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function repeat() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function name_sample() {

    }   
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function name_container() {

    }
    //% block
    //% group="Book-keeping instructions"
    //% color='#FF8900'
    export function name_plate() {

    }





    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function wait() {

    }
    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function store_until() {

    }
    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function use_or_store() {

    }
    //% block
    //% group="Timing"
    //% color="#F978A3"
    export function time_constraint() {

    }





    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function set_value() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function assign() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function add() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function divede() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function subtract() {

    }
    //% block
    //% group="Symbolic manipulation"
    //% color="#F7A4FA"
    export function multiply() {

    }



    //% block
    //% group="Disposal"
    export function discard() {

    }
    //% block
    //% group="Disposal"
    export function drain() {

    }


    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_fluid() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_solid() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_container() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_plate() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_slide() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_symbol() {

    }
    //% block
    //% group="Declaration of resources"
    //% color="#9170FC"
    export function new_column() {

    }




    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_fluid() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_solid() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function measure_prop() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function add_to_column() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function add_to_slide() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function collect_tissue() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function plate_out() {

    }
    //% block
    //% group="Measurement"
    //% color="#55F786"
    export function transfer() {

    }




    //% block
    //% group="Combination & mixing"
    //% color="#0033FF"
    export function combine() {

    }
    

    //% block
    //% group="Temperature & storage"
    export function incubate() {

    }
    
    //% block="container $container|speed $speed|temperature $temperature|time $time"
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge(container:string, speed: number, temperature: number,time:number ) {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_pellet() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_top() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_phases_bottom() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_column() {

    }
    //% block
    //% group="Centrifugation"
    //% color="#00C4FF"
    export function centrifuge_flow_through() {

    }




    //% block
    //% group="Detection & analysis"
    export function ce_detect() {

    }



}
