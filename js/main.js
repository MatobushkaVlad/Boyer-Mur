function rk_hash(s, m){
    var h = 0;
    for(let i = 0; i < m; ++i){
        h += s.charCodeAt(i);
    }
    return h;
}

function rk_hash_update(h, out_f, in_f){
    return h - out_f + in_f;
}

function rk_substring_search(){
    var S = document.getElementById("text").value;
    var Q = document.getElementById("string").value;
    var N = S.length;
    var M = Q.length;
    var K = new Array();
    var k;
    var hs = rk_hash(S, M);
    var hq = rk_hash(Q, M);
    for(k = 0; k <= N - M; k++){
        var j;
        if(hs == hq){
            for(j = 0; j < M; j++){
                if(S[k + j] != Q[j]){
                    break;
                }
            }
            if(j == M){
                K.push(k);
            }
        }
        hs = rk_hash_update(hs, S.charCodeAt(k), S.charCodeAt(k + M));
    }

    var ans = Q + ": ";

    if(K.length == 0){
        ans += "Not find!";
        document.getElementById("answer").innerHTML = ans;
        //console.log("Empty!");
    }
    else{
        for(let i = 0; i < K.length; i++){
            ans += (K[i] + " ");
            //console.log(Q + ": " + K[i] + " ");
        }
        document.getElementById("answer").innerHTML = ans;
    }
}