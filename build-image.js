#!/usr/bin/jjs -fv
var cmd = "docker build -t parana/centos7-openjdk8 ."
var System = Java.type("java.lang.System");
$EXEC(cmd, System.in, System.out, System.err);

