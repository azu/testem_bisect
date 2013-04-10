buster.testCase("Hello", {
    "say hello": function (){
        var result = hello();
        assert.equals(result, "Hello");
    },
    "argument": function (){
        var result = hello("bob");
        assert.equals(result, "Hello bob");
    }
});