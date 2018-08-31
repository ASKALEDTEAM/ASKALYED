#!/usr/bin/env bash
cd askalyd
screen -S askalyd -X kill
screen -S askalyd ./SkAy
