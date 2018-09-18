
var tree={inheritance:["java.Object", "java.Hello", "java.Hello.World"]};
var data="this is a text class Hello.Word";
var method=[{method_name: "print()",
            method_id: 2,
            method_kg_id: 2,
            method_des: "Print \"hello world!\"",
            class_define: "public void print(String n)",
            return_type: "void",
            see_also:["a","b"],
            related_post_url: ["a","b"]},
            {method_name: "get name()",
            method_id: 2,
            method_kg_id: 2,
            method_des: "Print \"hello world!\"",
            class_define:"public string get name()",
            return_type: "string",
            see_also:["a","b"],
            related_post_url: ["a","b"],           
            }
            ];
var post=[
     {post_id:"52253738",
     post_url:"https://stackoverflow.com/questions/52253738/git-clone-recurse-submodules-fails-silently",
     post_question:"most trusted online community for developers to learnshare​ ​their programming ​knowledge, and build their careers.",
     post_kg_id: 4},
     {post_id:"52253775",
     post_url:"https://stackoverflow.com/questions/52253775/how-spring-boot-internally-handles-the-http-request-here",
     post_question:"How Spring boot internally handles the http request here?",
     post_kg_id: 5}
];

var code = [{"code_id": 5,
            "code_kg_id": 5,
            "code_text": "import Hello.World\n\n\tHello.World.print(\"Hello World\")",
            "code_summary": "Print a hello world in the screen."
            }];
var kg_id;
var api_name;
function jumpClick(){
   $(".inheritance").html("");
    // br="&nbsp";
    // for (var i=0;i<tree.length;i++)
    // {
    //   br=br+"&nbsp&nbsp&nbsp";
    //   l="<li>"+br+tree[i]+"</li><br/>";
    //   $(".inheritance").append(l);
    // }
    $("#method_detail").html("");
    $("#post_detail").html("");
    $("#inheritance").html("");
    $("#code_description").html("");
    $("#method_summary_tbody").html("");
    var textvalue = $("input[class='form-control']").val();
    if(textvalue.length!=''){
       // $('#each').tmpl(tree).appendTo('#eachList');
        $(".details").show();
        $(".description").show();
        var ta_head="<tr><th class=colFirst scope=col>Modifier and Type</th><th class=colLast scope=col>Method and Description</th></tr>";
         $("#method_summary_tbody").append(ta_head);
         $("#class_description").html(data);
         $("#method_detail_script").tmpl(method).appendTo("#method_detail");
         $("#post_detail_script").tmpl(post).appendTo("#post_detail");
         $("#inheritance_script").tmpl(tree).appendTo("#inheritance");
         $("#code_description_script").tmpl(code).appendTo("#code_description");
         $("#method_summary_tbody_script").tmpl(method).appendTo("#method_summary_tbody");
       // $.ajax({
       //      async: true,                                              
       //      url: "http://bigcode.fudan.edu.cn/dysd3/APISearch/",    
       //      type: "post",                                             
       //      contentType: "application/json; charset=utf-8",           
       //      data: JSON.stringify({"query":textvalue}),              
       //      error: function (xhr, status, errorThrown) {              
       //          console.log("Error " + errorThrown);
       //          console.log("Status: " + status);
       //          console.log(xhr);
       //      },
       //      success: function(d){
       //          console.log("api search:",d);
       //          kg_id=d.kg_id;
       //          api_name=d.api_name;
       //          console.log(api_name);
       //          console.log(kg_id);

       //          $.ajax({
       //              async: true,                                              
       //              url: "http://bigcode.fudan.edu.cn/dysd3/ExtendInfo/",    
       //              type: "post",                                             
       //              contentType: "application/json; charset=utf-8",           
       //              data: JSON.stringify({"kg_id":kg_id}),              
       //              error: function (xhr, status, errorThrown) {              
       //                  console.log("Error " + errorThrown);
       //                  console.log("Status: " + status);
       //                  console.log(xhr);
       //              },
       //              success: function(d){
       //                  console.log(d);
       //                  console.log(kg_id);
       //                  var in_tree = new Array(); 
       //                  if(d.length>0){ 
       //                    in_tree['inheritance'] = d; 
       //                  }else{
       //                    in_tree['inheritance'] = [api_name]; 
       //                  }
       //                  console.log(api_name);
       //                  $("#inheritance_script").tmpl(in_tree).appendTo("#inheritance");
       //              }                          
       //          });

       //          $.ajax({
       //              async: true,                                              
       //              url: "http://bigcode.fudan.edu.cn/dysd3/DirectiveSentence/",    
       //              type: "post",                                             
       //              contentType: "application/json; charset=utf-8",           
       //              data: JSON.stringify({"kg_id":kg_id}),              
       //              error: function (xhr, status, errorThrown) {              
       //                  console.log("Error " + errorThrown);
       //                  console.log("Status: " + status);
       //                  console.log(xhr);
       //              },
       //              success: function(d){
       //                console.log(d);
       //                if (d.length>0){
       //                  $("#class_description").html(d);
       //                }
       //              }                         
       //          });

       //          $.ajax({
       //              async: true,                                              
       //              url: "http://bigcode.fudan.edu.cn/dysd3/MethodSearch/",    
       //              type: "post",                                             
       //              contentType: "application/json; charset=utf-8",           
       //              data: JSON.stringify({"kg_id":kg_id}),              
       //              error: function (xhr, status, errorThrown) {              
       //                  console.log("Error " + errorThrown);
       //                  console.log("Status: " + status);
       //                  console.log(xhr);
       //              },
       //              success: function(d){
       //                console.log(d);
       //                if (d.length>0){
       //                  $("#show_method_summary").show();
       //                  $("#show_method_detail").show();
       //                  $("#method_summary_tbody_script").tmpl(d).appendTo("#method_summary_tbody");
       //                  $("#method_detail_script").tmpl(d).appendTo("#method_detail");
       //                }
       //              }                         
       //          });

       //           $.ajax({
       //              async: true,                                              
       //              url: "http://bigcode.fudan.edu.cn/dysd3/RelatedPostSearch/",    
       //              type: "post",                                             
       //              contentType: "application/json; charset=utf-8",           
       //              data: JSON.stringify({"kg_id":kg_id}),              
       //              error: function (xhr, status, errorThrown) {              
       //                  console.log("Error " + errorThrown);
       //                  console.log("Status: " + status);
       //                  console.log(xhr);
       //              },
       //              success: function(d){
       //                    console.log(d);
       //                    if(d.length>0){
       //                      $("#show_post").show();
       //                      $("#post_detail_script").tmpl(d).appendTo("#post_detail");
       //                    }
       //              }                          
       //          });

       //          $.ajax({
       //            async: true,                                              
       //            url: "http://bigcode.fudan.edu.cn/dysd3/ExampleCodeSearch/",    
       //            type: "post",                                             
       //            contentType: "application/json; charset=utf-8",           
       //            data: JSON.stringify({"kg_id":kg_id}),              
       //            error: function (xhr, status, errorThrown) {              
       //                console.log("Error " + errorThrown);
       //                console.log("Status: " + status);
       //                console.log(xhr);
       //            },
       //            success: function(d){
       //                console.log(d);
       //                if(d.length){
       //                  $("#show_code").show();
       //                  $("#code_description_script").tmpl(d).appendTo("#code_description");
       //                }
       //            }                          
       //        });
       //      }                          
       //  });

    }else{
      $(".details").css('display','none');
      $(".description").css('display','none');
      $("#class_description").html("");
      $("#method_detail").html("");
      $("#post_detail").html("");
      $(".inheritance").html("");
      $("#code_description").html("");
        alert("empty input");
    }   
}

function keyup_submit(e){ 
  var evt = window.event || e; 
    if (evt.keyCode == 13){
     jumpClick();
   }
}
