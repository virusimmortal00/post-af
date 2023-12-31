$(document).ready(function(){

    new ClipboardJS('.btn');

    function GetUserIP(){
        var ret_ip;
        $.ajaxSetup({async: false});
        $.get('https://jsonip.com/', function(r){ 
            ret_ip = r.ip; 
        });
        return ret_ip;
    }

    var eventTemplate_ios = {
        "att": 3,
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
        "uid": "1850557D-3F50-417C-84EC-B8CB832320B0",
        "lang": "en-US",
        "timestamp": "2023-06-18T00:20:01.502",
        "inst_date": "2023-06-18T00:16:01.502",
        "os": "15.6.1",
        "ip": "11.22.33.44",
        "idfa": "1850557D-3F50-417C-84EC-B8CB832320B0",   
        "idfv": "18506666-3F50-417C-84EC-B8CB83236666",
        "type": "iPhone",
        "counter": 4,
        "aie": true,
        "event_currency": "USD",
        "event_name": "af_purchase",
        "event_value": {"af_revenue" : 19.99, "af_currency": "USD", "af_quantity": 1, "af_content_type" : "shirt"}
    };

    var eventTemplate_android = {
        "ua": "Mozilla/5.0 (Linux; Android 11; RMX2193 Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/112.0.5615.101 Mobile Safari/537.36",
        "uid": "861ec5db-4798-44e8-8516-35e6ece358ed",
        "lang": "en-US",
        "timestamp": "2023-06-18T00:20:01.502",
        "inst_date": "2023-06-18T00:16:01.502",
        "os": "11",
        "ip": "11.22.33.44",
        "advertising_id":"861ec5db-4798-44e8-8516-35e6ece358ed",
        "type": "SM-S901U",
        "counter": 4,
        "aie": true,
        "event_currency": "USD",
        "event_name": "af_purchase",
        "event_value": {"af_revenue" : 19.99, "af_currency": "USD", "af_quantity": 1, "af_content_type" : "shirt"}
    };

    var installTemplate_ios = {
        "att": 3,
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1",
        "uid": "1850557D-3F50-417C-84EC-B8CB832320B0",
        "lang": "en-US",
        "timestamp": "2023-06-18T00:20:01.502",
        "inst_date": "2023-06-18T00:16:01.502",
        "os": "15.6.1",
        "ip": "11.22.33.44",
        "idfa": "1850557D-3F50-417C-84EC-B8CB832320B0",   
        "idfv": "18506666-3F50-417C-84EC-B8CB83236666",
        "type": "iPhone",
        "counter": 1,
        "aie": true
        };

        var installTemplate_android = {
            "ua": "Mozilla/5.0 (Linux; Android 11; RMX2193 Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/112.0.5615.101 Mobile Safari/537.36",
            "uid": "861ec5db-4798-44e8-8516-35e6ece358ed",
            "lang": "en-US",
            "timestamp": "2023-06-18T00:20:01.502",
            "inst_date": "2023-06-18T00:16:01.502",
            "os": "11",
            "ip": "11.22.33.44",
            "advertising_id":"861ec5db-4798-44e8-8516-35e6ece358ed",
            "type": "SM-S901U",
            "counter": 1,
            "aie": true
        };

    $("#event_button_ios").click(function(){
        if (GetUserIP())
        {
            eventTemplate_ios["ip"] = GetUserIP();
        }
        eventTemplate_ios["timestamp"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        eventTemplate_ios["inst_date"] = moment.utc().subtract(15, 'hours').format("YYYY-MM-DDTHH:mm:ss.SSS");
        $("#myTextarea").val(JSON.stringify(eventTemplate_ios, null, 3));
        $( "#myTextarea" ).effect( "highlight", {color: '#f8f5f0'} );
        $( "#myTextarea").focus().scrollTop(0);
    });
    $("#install_button_ios").click(function(){

        if (GetUserIP())
        {
            installTemplate_ios["ip"] = GetUserIP();
        }
        installTemplate_ios["timestamp"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        installTemplate_ios["inst_date"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        $("#myTextarea").val(JSON.stringify(installTemplate_ios, null, 3));
        $( "#myTextarea" ).effect( "highlight", {color: '#f8f5f0'} );
        $( "#myTextarea").focus().scrollTop(0);
    });

    $("#event_button_android").click(function(){
        if (GetUserIP())
        {
            eventTemplate_android["ip"] = GetUserIP();
        }
        eventTemplate_android["timestamp"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        eventTemplate_android["inst_date"] = moment.utc().subtract(15, 'hours').format("YYYY-MM-DDTHH:mm:ss.SSS");
        $("#myTextarea").val(JSON.stringify(eventTemplate_android, null, 3));
        $( "#myTextarea" ).effect( "highlight", {color: '#f8f5f0'} );
        $( "#myTextarea").focus().scrollTop(0);
    });
    $("#install_button_android").click(function(){
        if (GetUserIP())
        {
            installTemplate_android["ip"] = GetUserIP();
        }
        installTemplate_android["timestamp"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        installTemplate_android["inst_date"] = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSS");
        $("#myTextarea").val(JSON.stringify(installTemplate_android, null, 3));
        $( "#myTextarea" ).effect( "highlight", {color: '#f8f5f0'} );
        $( "#myTextarea").focus().scrollTop(0);
    });


    $("#mainSubmitButton").click(function(){
        $("#myTextarea").LoadingOverlay("show", {
            background  : "rgba(248, 245, 240, 0.5)",
        });
        $("#myTextarea").LoadingOverlay("hide", true);
    });

    var loadingData = true;
    $('#table').bootstrapTable({   
        formatLoadingMessage: function () {
            loadingData = true;
            return '';
        },
        formatNoMatches: function () {
            if (loadingData){
                loadingData = false;
                return 'No history found - are you new here?';
            }else{
                return 'No data found.';
            }
        },
    });

    // Here, you can expect to have as the last parameter the boostrap-table object
/** 
    $('#table').on('click-cell.bs.table', function (field, value, row, $el) {
        if (value !="type"){
            $('#rowmodalbody').html($('<b> Code from row: ' + row + '</b>'));
            $("#rowModal").modal('show');
          // alert($el.id+"-"+$el.name+"-"+$el.type);
     }
   });
*/

$('#table').on('click-row.bs.table', function (e, row, $element) {

    //$('#orderDetails').html($('<b> ' + $(this).data('id') + '</b>'));
    $('#disabledInputURL').val(row.url_string);
    $('#rowmodalbody_headers').html($('<pre class="my-0"><code class="text-wrap">' + row.headers + '</code></pre>'));
    $('#rowmodalbody_payload').html($('<pre class="my-0"><code>' + row.payload + '</code></pre>'));
    $('#rowmodalbody_codemsg').html($('<strong>' + row.code + ' - ' + row.reason + '</strong>'));

    //code reason
    //$('#exampleModalLabel').html($(row.code + ' - ' + row.reason));
    // 
    $("#rowModal").modal('show');
    
});

    $('#table tbody').css('cursor', 'pointer');
    // test
});

