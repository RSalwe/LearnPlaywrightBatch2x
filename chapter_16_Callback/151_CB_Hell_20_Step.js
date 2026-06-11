// Callback Hell - Pyramid of Doom with 20 nested callbacks
// This demonstrates the anti-pattern of deeply nested callbacks

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback("result1");
    }, 100);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log("Step 2 completed with:", data);
        callback("result2");
    }, 100);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log("Step 3 completed with:", data);
        callback("result3");
    }, 100);
}

function step4(data, callback) {
    setTimeout(() => {
        console.log("Step 4 completed with:", data);
        callback("result4");
    }, 100);
}

function step5(data, callback) {
    setTimeout(() => {
        console.log("Step 5 completed with:", data);
        callback("result5");
    }, 100);
}

function step6(data, callback) {
    setTimeout(() => {
        console.log("Step 6 completed with:", data);
        callback("result6");
    }, 100);
}

function step7(data, callback) {
    setTimeout(() => {
        console.log("Step 7 completed with:", data);
        callback("result7");
    }, 100);
}

function step8(data, callback) {
    setTimeout(() => {
        console.log("Step 8 completed with:", data);
        callback("result8");
    }, 100);
}

function step9(data, callback) {
    setTimeout(() => {
        console.log("Step 9 completed with:", data);
        callback("result9");
    }, 100);
}

function step10(data, callback) {
    setTimeout(() => {
        console.log("Step 10 completed with:", data);
        callback("result10");
    }, 100);
}

function step11(data, callback) {
    setTimeout(() => {
        console.log("Step 11 completed with:", data);
        callback("result11");
    }, 100);
}

function step12(data, callback) {
    setTimeout(() => {
        console.log("Step 12 completed with:", data);
        callback("result12");
    }, 100);
}

function step13(data, callback) {
    setTimeout(() => {
        console.log("Step 13 completed with:", data);
        callback("result13");
    }, 100);
}

function step14(data, callback) {
    setTimeout(() => {
        console.log("Step 14 completed with:", data);
        callback("result14");
    }, 100);
}

function step15(data, callback) {
    setTimeout(() => {
        console.log("Step 15 completed with:", data);
        callback("result15");
    }, 100);
}

function step16(data, callback) {
    setTimeout(() => {
        console.log("Step 16 completed with:", data);
        callback("result16");
    }, 100);
}

function step17(data, callback) {
    setTimeout(() => {
        console.log("Step 17 completed with:", data);
        callback("result17");
    }, 100);
}

function step18(data, callback) {
    setTimeout(() => {
        console.log("Step 18 completed with:", data);
        callback("result18");
    }, 100);
}

function step19(data, callback) {
    setTimeout(() => {
        console.log("Step 19 completed with:", data);
        callback("result19");
    }, 100);
}

function step20(data, callback) {
    setTimeout(() => {
        console.log("Step 20 completed with:", data);
        callback("result20");
    }, 100);
}

// The Pyramid of Doom - 20 levels deep
step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, (result3) => {
            step4(result3, (result4) => {
                step5(result4, (result5) => {
                    step6(result5, (result6) => {
                        step7(result6, (result7) => {
                            step8(result7, (result8) => {
                                step9(result8, (result9) => {
                                    step10(result9, (result10) => {
                                        step11(result10, (result11) => {
                                            step12(result11, (result12) => {
                                                step13(result12, (result13) => {
                                                    step14(result13, (result14) => {
                                                        step15(result14, (result15) => {
                                                            step16(result15, (result16) => {
                                                                step17(result16, (result17) => {
                                                                    step18(result17, (result18) => {
                                                                        step19(result18, (result19) => {
                                                                            step20(result19, (result20) => {
                                                                                console.log("\n=== All 20 steps completed! ===");
                                                                                console.log("Final result:", result20);
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
