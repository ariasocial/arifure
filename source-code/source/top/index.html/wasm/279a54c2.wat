(module
  (memory $memory (;0;) (export "memory") 1)
  (global $global0 (mut i32) (i32.const 25616))
  (func $__wasm_call_ctors (;0;) (export "__wasm_call_ctors")
  )
  (func $meshopt_decodeVertexBuffer (;1;) (export "meshopt_decodeVertexBuffer") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (result i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    (local $var10 i32)
    (local $var11 i32)
    (local $var12 i32)
    (local $var13 i32)
    (local $var14 i32)
    (local $var15 i32)
    (local $var16 i32)
    (local $var17 i32)
    (local $var18 i32)
    (local $var19 i32)
    (local $var20 i32)
    (local $var21 i32)
    global.get $global0
    i32.const 8704
    i32.sub
    local.tee $var5
    global.set $global0
    i32.const -2
    local.set $var6
    block $label0
      local.get $var2
      i32.const 1
      i32.add
      local.get $var4
      i32.gt_u
      br_if $label0
      i32.const -1
      local.set $var6
      local.get $var3
      i32.load8_u
      i32.const 160
      i32.ne
      br_if $label0
      local.get $var5
      local.get $var3
      local.get $var4
      i32.add
      local.tee $var7
      local.get $var2
      i32.sub
      local.get $var2
      call $func4
      local.set $var8
      i32.const 8192
      local.get $var2
      i32.div_u
      local.set $var4
      local.get $var3
      i32.const 1
      i32.add
      local.set $var6
      block $label1
        local.get $var2
        i32.eqz
        br_if $label1
        local.get $var4
        i32.const 16368
        i32.and
        local.tee $var4
        i32.const 256
        local.get $var4
        i32.const 256
        i32.lt_u
        select
        local.set $var9
        i32.const 0
        local.set $var10
        loop $label21
          local.get $var10
          local.get $var1
          i32.ge_u
          br_if $label1
          local.get $var9
          local.get $var1
          local.get $var10
          i32.sub
          local.get $var10
          local.get $var9
          i32.add
          local.get $var1
          i32.lt_u
          select
          local.tee $var11
          i32.const 15
          i32.add
          local.tee $var4
          i32.const 4
          i32.shr_u
          i32.const 3
          i32.add
          i32.const 2
          i32.shr_u
          local.set $var12
          block $label16
            block $label3
              block $label12
                block $label2
                  local.get $var4
                  i32.const -16
                  i32.and
                  local.tee $var13
                  i32.eqz
                  br_if $label2
                  i32.const 0
                  local.set $var14
                  i32.const 1
                  local.set $var15
                  local.get $var8
                  i32.const 256
                  i32.add
                  local.set $var16
                  local.get $var6
                  local.set $var17
                  loop $label15
                    local.get $var7
                    local.get $var17
                    i32.sub
                    local.get $var12
                    i32.lt_u
                    br_if $label3
                    block $label4
                      local.get $var7
                      local.get $var17
                      local.get $var12
                      i32.add
                      local.tee $var6
                      i32.sub
                      i32.const 24
                      i32.lt_u
                      br_if $label4
                      i32.const 16
                      local.set $var4
                      i32.const 0
                      local.set $var18
                      loop $label11
                        local.get $var4
                        local.tee $var3
                        i32.const -16
                        i32.add
                        local.tee $var19
                        local.get $var8
                        i32.const 8448
                        i32.add
                        i32.add
                        local.set $var4
                        block $label9
                          block $label8
                            block $label7
                              block $label6
                                block $label5
                                  local.get $var17
                                  local.get $var19
                                  i32.const 6
                                  i32.shr_u
                                  i32.add
                                  i32.load8_u
                                  local.get $var18
                                  i32.const 6
                                  i32.and
                                  i32.shr_u
                                  i32.const 3
                                  i32.and
                                  br_table $label5 $label6 $label7 $label8 $label5
                                end $label5
                                local.get $var4
                                i64.const 0
                                i64.store
                                local.get $var4
                                i32.const 8
                                i32.add
                                i64.const 0
                                i64.store
                                br $label9
                              end $label6
                              local.get $var4
                              local.get $var6
                              i32.load8_u offset=4
                              local.get $var6
                              i32.load8_u
                              local.tee $var19
                              i32.const 6
                              i32.shr_u
                              local.tee $var20
                              local.get $var20
                              i32.const 3
                              i32.eq
                              local.tee $var20
                              select
                              i32.store8
                              local.get $var8
                              i32.const 8448
                              i32.add
                              local.get $var3
                              i32.add
                              local.tee $var4
                              i32.const -15
                              i32.add
                              local.get $var6
                              i32.const 4
                              i32.add
                              local.get $var20
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 4
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -14
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 2
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -13
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 3
                              i32.and
                              local.tee $var19
                              local.get $var19
                              i32.const 3
                              i32.eq
                              local.tee $var19
                              select
                              i32.store8
                              local.get $var4
                              i32.const -12
                              i32.add
                              local.get $var20
                              local.get $var19
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var6
                              i32.load8_u offset=1
                              local.tee $var19
                              i32.const 6
                              i32.shr_u
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -11
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 4
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -10
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 2
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -9
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 3
                              i32.and
                              local.tee $var19
                              local.get $var19
                              i32.const 3
                              i32.eq
                              local.tee $var19
                              select
                              i32.store8
                              local.get $var4
                              i32.const -8
                              i32.add
                              local.get $var20
                              local.get $var19
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var6
                              i32.load8_u offset=2
                              local.tee $var19
                              i32.const 6
                              i32.shr_u
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -7
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 4
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -6
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 2
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var21
                              local.get $var21
                              i32.const 3
                              i32.eq
                              local.tee $var21
                              select
                              i32.store8
                              local.get $var4
                              i32.const -5
                              i32.add
                              local.get $var20
                              local.get $var21
                              i32.add
                              local.tee $var20
                              i32.load8_u
                              local.get $var19
                              i32.const 3
                              i32.and
                              local.tee $var19
                              local.get $var19
                              i32.const 3
                              i32.eq
                              local.tee $var19
                              select
                              i32.store8
                              local.get $var4
                              i32.const -4
                              i32.add
                              local.get $var20
                              local.get $var19
                              i32.add
                              local.tee $var19
                              i32.load8_u
                              local.get $var6
                              i32.load8_u offset=3
                              local.tee $var6
                              i32.const 6
                              i32.shr_u
                              local.tee $var20
                              local.get $var20
                              i32.const 3
                              i32.eq
                              local.tee $var20
                              select
                              i32.store8
                              local.get $var4
                              i32.const -3
                              i32.add
                              local.get $var19
                              local.get $var20
                              i32.add
                              local.tee $var19
                              i32.load8_u
                              local.get $var6
                              i32.const 4
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var20
                              local.get $var20
                              i32.const 3
                              i32.eq
                              local.tee $var20
                              select
                              i32.store8
                              local.get $var4
                              i32.const -2
                              i32.add
                              local.get $var19
                              local.get $var20
                              i32.add
                              local.tee $var19
                              i32.load8_u
                              local.get $var6
                              i32.const 2
                              i32.shr_u
                              i32.const 3
                              i32.and
                              local.tee $var20
                              local.get $var20
                              i32.const 3
                              i32.eq
                              local.tee $var20
                              select
                              i32.store8
                              local.get $var4
                              i32.const -1
                              i32.add
                              local.get $var19
                              local.get $var20
                              i32.add
                              local.tee $var4
                              i32.load8_u
                              local.get $var6
                              i32.const 3
                              i32.and
                              local.tee $var6
                              local.get $var6
                              i32.const 3
                              i32.eq
                              local.tee $var6
                              select
                              i32.store8
                              local.get $var4
                              local.get $var6
                              i32.add
                              local.set $var6
                              br $label9
                            end $label7
                            local.get $var4
                            local.get $var6
                            i32.load8_u offset=8
                            local.get $var6
                            i32.load8_u
                            local.tee $var19
                            i32.const 4
                            i32.shr_u
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var8
                            i32.const 8448
                            i32.add
                            local.get $var3
                            i32.add
                            local.tee $var4
                            i32.const -15
                            i32.add
                            local.get $var6
                            i32.const 8
                            i32.add
                            local.get $var20
                            i32.add
                            local.tee $var20
                            i32.load8_u
                            local.get $var19
                            i32.const 15
                            i32.and
                            local.tee $var19
                            local.get $var19
                            i32.const 15
                            i32.eq
                            local.tee $var19
                            select
                            i32.store8
                            local.get $var4
                            i32.const -14
                            i32.add
                            local.get $var20
                            local.get $var19
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=1
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -13
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -12
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=2
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -11
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -10
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=3
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -9
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -8
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=4
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -7
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -6
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=5
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -5
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -4
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=6
                            local.tee $var20
                            i32.const 4
                            i32.shr_u
                            local.tee $var21
                            local.get $var21
                            i32.const 15
                            i32.eq
                            local.tee $var21
                            select
                            i32.store8
                            local.get $var4
                            i32.const -3
                            i32.add
                            local.get $var19
                            local.get $var21
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var20
                            i32.const 15
                            i32.and
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -2
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var19
                            i32.load8_u
                            local.get $var6
                            i32.load8_u offset=7
                            local.tee $var6
                            i32.const 4
                            i32.shr_u
                            local.tee $var20
                            local.get $var20
                            i32.const 15
                            i32.eq
                            local.tee $var20
                            select
                            i32.store8
                            local.get $var4
                            i32.const -1
                            i32.add
                            local.get $var19
                            local.get $var20
                            i32.add
                            local.tee $var4
                            i32.load8_u
                            local.get $var6
                            i32.const 15
                            i32.and
                            local.tee $var6
                            local.get $var6
                            i32.const 15
                            i32.eq
                            local.tee $var6
                            select
                            i32.store8
                            local.get $var4
                            local.get $var6
                            i32.add
                            local.set $var6
                            br $label9
                          end $label8
                          local.get $var4
                          local.get $var6
                          i64.load align=1
                          i64.store align=1
                          local.get $var4
                          i32.const 8
                          i32.add
                          local.get $var6
                          i32.const 8
                          i32.add
                          i64.load align=1
                          i64.store align=1
                          local.get $var6
                          i32.const 16
                          i32.add
                          local.set $var6
                        end $label9
                        block $label10
                          local.get $var3
                          local.get $var13
                          i32.ge_u
                          br_if $label10
                          local.get $var18
                          i32.const 2
                          i32.add
                          local.set $var18
                          local.get $var3
                          i32.const 16
                          i32.add
                          local.set $var4
                          local.get $var7
                          local.get $var6
                          i32.sub
                          i32.const 23
                          i32.gt_u
                          br_if $label11
                        end $label10
                      end $label11
                      local.get $var3
                      local.get $var13
                      i32.lt_u
                      br_if $label12
                      local.get $var6
                      i32.eqz
                      br_if $label12
                      block $label13
                        local.get $var11
                        i32.eqz
                        br_if $label13
                        local.get $var8
                        local.get $var14
                        i32.add
                        i32.load8_u
                        local.set $var18
                        local.get $var8
                        i32.const 8448
                        i32.add
                        local.set $var4
                        local.get $var16
                        local.set $var3
                        local.get $var11
                        local.set $var19
                        loop $label14
                          local.get $var3
                          local.get $var4
                          i32.load8_u
                          local.tee $var17
                          i32.const 1
                          i32.shr_u
                          i32.const 0
                          local.get $var17
                          i32.const 1
                          i32.and
                          i32.sub
                          i32.xor
                          local.get $var18
                          i32.add
                          local.tee $var18
                          i32.store8
                          local.get $var3
                          local.get $var2
                          i32.add
                          local.set $var3
                          local.get $var4
                          i32.const 1
                          i32.add
                          local.set $var4
                          local.get $var19
                          i32.const -1
                          i32.add
                          local.tee $var19
                          br_if $label14
                        end $label14
                      end $label13
                      local.get $var16
                      i32.const 1
                      i32.add
                      local.set $var16
                      local.get $var14
                      i32.const 1
                      i32.add
                      local.tee $var14
                      local.get $var2
                      i32.lt_u
                      local.set $var15
                      local.get $var6
                      local.set $var17
                      local.get $var14
                      local.get $var2
                      i32.ne
                      br_if $label15
                      br $label16
                    end $label4
                  end $label15
                  i32.const 0
                  local.set $var6
                  local.get $var15
                  i32.const 1
                  i32.and
                  br_if $label3
                  br $label16
                end $label2
                local.get $var6
                local.get $var12
                local.get $var2
                i32.mul
                i32.add
                local.set $var21
                block $label17
                  local.get $var11
                  i32.eqz
                  br_if $label17
                  i32.const 0
                  local.set $var13
                  i32.const 1
                  local.set $var15
                  local.get $var8
                  i32.const 256
                  i32.add
                  local.set $var20
                  loop $label19
                    local.get $var7
                    local.get $var6
                    i32.sub
                    local.get $var12
                    i32.lt_u
                    br_if $label3
                    local.get $var6
                    i32.eqz
                    br_if $label12
                    local.get $var6
                    local.get $var12
                    i32.add
                    local.set $var6
                    local.get $var8
                    local.get $var13
                    i32.add
                    i32.load8_u
                    local.set $var18
                    local.get $var8
                    i32.const 8448
                    i32.add
                    local.set $var4
                    local.get $var20
                    local.set $var3
                    local.get $var11
                    local.set $var19
                    loop $label18
                      local.get $var3
                      local.get $var4
                      i32.load8_u
                      local.tee $var17
                      i32.const 1
                      i32.shr_u
                      i32.const 0
                      local.get $var17
                      i32.const 1
                      i32.and
                      i32.sub
                      i32.xor
                      local.get $var18
                      i32.add
                      local.tee $var18
                      i32.store8
                      local.get $var3
                      local.get $var2
                      i32.add
                      local.set $var3
                      local.get $var4
                      i32.const 1
                      i32.add
                      local.set $var4
                      local.get $var19
                      i32.const -1
                      i32.add
                      local.tee $var19
                      br_if $label18
                    end $label18
                    local.get $var20
                    i32.const 1
                    i32.add
                    local.set $var20
                    local.get $var13
                    i32.const 1
                    i32.add
                    local.tee $var13
                    local.get $var2
                    i32.lt_u
                    local.set $var15
                    local.get $var13
                    local.get $var2
                    i32.ne
                    br_if $label19
                  end $label19
                  local.get $var21
                  local.set $var6
                  br $label16
                end $label17
                i32.const 0
                local.set $var4
                i32.const 1
                local.set $var15
                loop $label20
                  local.get $var7
                  local.get $var6
                  i32.sub
                  local.get $var12
                  i32.lt_u
                  br_if $label3
                  local.get $var6
                  i32.eqz
                  br_if $label12
                  local.get $var6
                  local.get $var12
                  i32.add
                  local.set $var6
                  local.get $var4
                  i32.const 1
                  i32.add
                  local.tee $var4
                  local.get $var2
                  i32.lt_u
                  local.set $var15
                  local.get $var2
                  local.get $var4
                  i32.ne
                  br_if $label20
                end $label20
                local.get $var21
                local.set $var6
                br $label16
              end $label12
              i32.const 0
              local.set $var6
              local.get $var15
              i32.const 1
              i32.and
              i32.eqz
              br_if $label16
            end $label3
            i32.const -2
            local.set $var6
            br $label0
          end $label16
          local.get $var0
          local.get $var10
          local.get $var2
          i32.mul
          i32.add
          local.get $var8
          i32.const 256
          i32.add
          local.get $var11
          local.get $var2
          i32.mul
          call $func4
          drop
          local.get $var8
          local.get $var8
          i32.const 256
          i32.add
          local.get $var11
          i32.const -1
          i32.add
          local.get $var2
          i32.mul
          i32.add
          local.get $var2
          call $func4
          drop
          local.get $var11
          local.get $var10
          i32.add
          local.set $var10
          local.get $var6
          br_if $label21
        end $label21
        i32.const -2
        local.set $var6
        br $label0
      end $label1
      i32.const 0
      i32.const -3
      local.get $var7
      local.get $var6
      i32.sub
      local.get $var2
      i32.const 32
      local.get $var2
      i32.const 32
      i32.gt_u
      select
      i32.eq
      select
      local.set $var6
    end $label0
    local.get $var5
    i32.const 8704
    i32.add
    global.set $global0
    local.get $var6
  )
  (func $meshopt_decodeIndexBuffer (;2;) (export "meshopt_decodeIndexBuffer") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (result i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    (local $var10 i32)
    (local $var11 i32)
    (local $var12 i32)
    (local $var13 i32)
    (local $var14 i32)
    (local $var15 i32)
    (local $var16 i32)
    (local $var17 i32)
    (local $var18 i32)
    (local $var19 i32)
    (local $var20 i32)
    (local $var21 i32)
    global.get $global0
    i32.const 192
    i32.sub
    local.tee $var5
    global.set $global0
    i32.const -2
    local.set $var6
    block $label0
      local.get $var1
      i32.const 3
      i32.div_u
      local.tee $var7
      i32.const 17
      i32.add
      local.get $var4
      i32.gt_u
      br_if $label0
      i32.const -1
      local.set $var6
      local.get $var3
      i32.load8_u
      local.tee $var8
      i32.const 240
      i32.and
      i32.const 224
      i32.ne
      br_if $label0
      local.get $var8
      i32.const 15
      i32.and
      local.tee $var9
      i32.const 1
      i32.gt_u
      br_if $label0
      local.get $var5
      i32.const 64
      i32.add
      i32.const 255
      i32.const 128
      call $func5
      drop
      local.get $var5
      i32.const 56
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i32.const 48
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i32.const 40
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i32.const 32
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i32.const 24
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i32.const 16
      i32.add
      i64.const -1
      i64.store
      local.get $var5
      i64.const -1
      i64.store offset=8
      local.get $var5
      i64.const -1
      i64.store
      local.get $var3
      local.get $var4
      i32.add
      i32.const -16
      i32.add
      local.set $var10
      local.get $var3
      i32.const 1
      i32.add
      local.tee $var8
      local.get $var7
      i32.add
      local.set $var6
      block $label1
        local.get $var1
        i32.eqz
        br_if $label1
        i32.const 13
        i32.const 15
        local.get $var9
        i32.const 1
        i32.eq
        select
        local.set $var11
        i32.const 0
        local.set $var12
        i32.const 0
        local.set $var13
        i32.const 0
        local.set $var7
        i32.const 0
        local.set $var3
        i32.const 0
        local.set $var4
        loop $label40
          block $label2
            local.get $var6
            local.get $var10
            i32.le_u
            br_if $label2
            i32.const -2
            local.set $var6
            br $label0
          end $label2
          block $label7
            block $label3
              local.get $var8
              i32.load8_u
              local.tee $var9
              i32.const 239
              i32.gt_u
              br_if $label3
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              local.get $var9
              i32.const -1
              i32.xor
              local.tee $var14
              i32.const 4
              i32.shr_u
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var15
              i32.load offset=4
              local.set $var16
              local.get $var15
              i32.load
              local.set $var17
              block $label4
                local.get $var9
                i32.const 15
                i32.and
                local.tee $var9
                local.get $var11
                i32.ge_u
                br_if $label4
                local.get $var5
                local.get $var3
                local.get $var14
                i32.add
                i32.const 15
                i32.and
                i32.const 2
                i32.shl
                i32.add
                i32.load
                local.get $var12
                local.get $var9
                select
                local.set $var15
                local.get $var9
                i32.eqz
                local.set $var9
                block $label6
                  block $label5
                    local.get $var2
                    i32.const 2
                    i32.ne
                    br_if $label5
                    local.get $var0
                    local.get $var7
                    i32.const 1
                    i32.shl
                    i32.add
                    local.tee $var14
                    local.get $var17
                    i32.store16
                    local.get $var14
                    i32.const 2
                    i32.add
                    local.get $var16
                    i32.store16
                    local.get $var14
                    i32.const 4
                    i32.add
                    local.get $var15
                    i32.store16
                    br $label6
                  end $label5
                  local.get $var0
                  local.get $var7
                  i32.const 2
                  i32.shl
                  i32.add
                  local.tee $var14
                  local.get $var17
                  i32.store
                  local.get $var14
                  i32.const 4
                  i32.add
                  local.get $var16
                  i32.store
                  local.get $var14
                  i32.const 8
                  i32.add
                  local.get $var15
                  i32.store
                end $label6
                local.get $var12
                local.get $var9
                i32.add
                local.set $var12
                local.get $var5
                i32.const 64
                i32.add
                local.get $var4
                i32.const 3
                i32.shl
                i32.add
                local.tee $var14
                local.get $var15
                i32.store
                local.get $var14
                local.get $var16
                i32.store offset=4
                local.get $var5
                local.get $var3
                i32.const 2
                i32.shl
                i32.add
                local.get $var15
                i32.store
                local.get $var5
                i32.const 64
                i32.add
                local.get $var4
                i32.const 1
                i32.add
                i32.const 15
                i32.and
                local.tee $var4
                i32.const 3
                i32.shl
                i32.add
                local.tee $var14
                local.get $var17
                i32.store
                local.get $var14
                local.get $var15
                i32.store offset=4
                local.get $var3
                local.get $var9
                i32.add
                local.set $var3
                local.get $var4
                i32.const 1
                i32.add
                local.set $var4
                br $label7
              end $label4
              block $label9
                block $label8
                  local.get $var9
                  i32.const 15
                  i32.eq
                  br_if $label8
                  local.get $var13
                  local.get $var9
                  i32.add
                  local.get $var9
                  i32.const -4
                  i32.xor
                  i32.add
                  i32.const 1
                  i32.add
                  local.set $var13
                  br $label9
                end $label8
                local.get $var6
                i32.const 1
                i32.add
                local.set $var9
                local.get $var6
                i32.load8_s
                local.tee $var15
                i32.const 255
                i32.and
                local.set $var14
                block $label11
                  block $label10
                    local.get $var15
                    i32.const -1
                    i32.le_s
                    br_if $label10
                    local.get $var9
                    local.set $var6
                    br $label11
                  end $label10
                  local.get $var6
                  i32.const 5
                  i32.add
                  local.set $var6
                  local.get $var14
                  i32.const 127
                  i32.and
                  local.set $var14
                  i32.const 7
                  local.set $var15
                  block $label12
                    loop $label13
                      local.get $var9
                      i32.load8_s
                      local.tee $var18
                      i32.const 127
                      i32.and
                      local.get $var15
                      i32.shl
                      local.get $var14
                      i32.or
                      local.set $var14
                      local.get $var18
                      i32.const -1
                      i32.gt_s
                      br_if $label12
                      local.get $var9
                      i32.const 1
                      i32.add
                      local.set $var9
                      local.get $var15
                      i32.const 7
                      i32.add
                      local.tee $var15
                      i32.const 35
                      i32.ne
                      br_if $label13
                      br $label11
                    end $label13
                  end $label12
                  local.get $var9
                  i32.const 1
                  i32.add
                  local.set $var6
                end $label11
                local.get $var14
                i32.const 1
                i32.shr_u
                i32.const 0
                local.get $var14
                i32.const 1
                i32.and
                i32.sub
                i32.xor
                local.get $var13
                i32.add
                local.set $var13
              end $label9
              block $label15
                block $label14
                  local.get $var2
                  i32.const 2
                  i32.ne
                  br_if $label14
                  local.get $var0
                  local.get $var7
                  i32.const 1
                  i32.shl
                  i32.add
                  local.tee $var9
                  local.get $var17
                  i32.store16
                  local.get $var9
                  i32.const 2
                  i32.add
                  local.get $var16
                  i32.store16
                  local.get $var9
                  i32.const 4
                  i32.add
                  local.get $var13
                  i32.store16
                  br $label15
                end $label14
                local.get $var0
                local.get $var7
                i32.const 2
                i32.shl
                i32.add
                local.tee $var9
                local.get $var17
                i32.store
                local.get $var9
                i32.const 4
                i32.add
                local.get $var16
                i32.store
                local.get $var9
                i32.const 8
                i32.add
                local.get $var13
                i32.store
              end $label15
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              i32.const 3
              i32.shl
              i32.add
              local.tee $var9
              local.get $var13
              i32.store
              local.get $var9
              local.get $var16
              i32.store offset=4
              local.get $var5
              local.get $var3
              i32.const 2
              i32.shl
              i32.add
              local.get $var13
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              i32.const 1
              i32.add
              i32.const 15
              i32.and
              local.tee $var4
              i32.const 3
              i32.shl
              i32.add
              local.tee $var9
              local.get $var17
              i32.store
              local.get $var9
              local.get $var13
              i32.store offset=4
              local.get $var3
              i32.const 1
              i32.add
              local.set $var3
              local.get $var4
              i32.const 1
              i32.add
              local.set $var4
              br $label7
            end $label3
            block $label16
              local.get $var9
              i32.const 253
              i32.gt_u
              br_if $label16
              local.get $var12
              i32.const 1
              i32.add
              local.tee $var18
              local.get $var5
              local.get $var3
              local.get $var10
              local.get $var9
              i32.const 15
              i32.and
              i32.add
              i32.load8_u
              local.tee $var15
              i32.const 4
              i32.shr_u
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.get $var15
              i32.const 16
              i32.lt_u
              local.tee $var14
              select
              local.set $var9
              local.get $var5
              local.get $var3
              local.get $var15
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.get $var18
              local.get $var14
              i32.add
              local.tee $var16
              local.get $var15
              i32.const 15
              i32.and
              local.tee $var18
              select
              local.set $var15
              local.get $var18
              i32.eqz
              local.set $var18
              block $label18
                block $label17
                  local.get $var2
                  i32.const 2
                  i32.ne
                  br_if $label17
                  local.get $var0
                  local.get $var7
                  i32.const 1
                  i32.shl
                  i32.add
                  local.tee $var17
                  local.get $var12
                  i32.store16
                  local.get $var17
                  i32.const 2
                  i32.add
                  local.get $var9
                  i32.store16
                  local.get $var17
                  i32.const 4
                  i32.add
                  local.get $var15
                  i32.store16
                  br $label18
                end $label17
                local.get $var0
                local.get $var7
                i32.const 2
                i32.shl
                i32.add
                local.tee $var17
                local.get $var12
                i32.store
                local.get $var17
                i32.const 4
                i32.add
                local.get $var9
                i32.store
                local.get $var17
                i32.const 8
                i32.add
                local.get $var15
                i32.store
              end $label18
              local.get $var5
              local.get $var3
              i32.const 2
              i32.shl
              i32.add
              local.get $var12
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              i32.const 3
              i32.shl
              i32.add
              local.tee $var17
              local.get $var9
              i32.store
              local.get $var17
              local.get $var12
              i32.store offset=4
              local.get $var5
              local.get $var3
              i32.const 1
              i32.add
              local.tee $var3
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              local.get $var9
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              i32.const 1
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var17
              local.get $var15
              i32.store
              local.get $var17
              local.get $var9
              i32.store offset=4
              local.get $var5
              local.get $var3
              local.get $var14
              i32.add
              i32.const 15
              i32.and
              local.tee $var3
              i32.const 2
              i32.shl
              i32.add
              local.get $var15
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var4
              i32.const 2
              i32.add
              i32.const 15
              i32.and
              local.tee $var4
              i32.const 3
              i32.shl
              i32.add
              local.tee $var9
              local.get $var12
              i32.store
              local.get $var9
              local.get $var15
              i32.store offset=4
              local.get $var4
              i32.const 1
              i32.add
              local.set $var4
              local.get $var3
              local.get $var18
              i32.add
              local.set $var3
              local.get $var16
              local.get $var18
              i32.add
              local.set $var12
              br $label7
            end $label16
            local.get $var12
            i32.const 0
            local.get $var6
            i32.load8_u
            local.tee $var17
            select
            local.tee $var19
            local.get $var9
            i32.const 254
            i32.eq
            local.tee $var9
            i32.add
            local.set $var16
            local.get $var17
            i32.const 15
            i32.and
            local.set $var20
            local.get $var17
            i32.const 4
            i32.shr_u
            local.set $var21
            block $label20
              block $label19
                local.get $var17
                i32.const 15
                i32.gt_u
                br_if $label19
                local.get $var16
                i32.const 1
                i32.add
                local.set $var18
                br $label20
              end $label19
              local.get $var16
              local.set $var18
              local.get $var5
              local.get $var3
              local.get $var21
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.set $var16
            end $label20
            block $label22
              block $label21
                local.get $var20
                br_if $label21
                local.get $var18
                i32.const 1
                i32.add
                local.set $var12
                br $label22
              end $label21
              local.get $var18
              local.set $var12
              local.get $var5
              local.get $var3
              local.get $var17
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.set $var18
            end $label22
            block $label24
              block $label23
                local.get $var9
                i32.eqz
                br_if $label23
                local.get $var6
                i32.const 1
                i32.add
                local.set $var9
                br $label24
              end $label23
              local.get $var6
              i32.const 2
              i32.add
              local.set $var9
              local.get $var6
              i32.load8_s offset=1
              local.tee $var14
              i32.const 255
              i32.and
              local.set $var15
              block $label25
                local.get $var14
                i32.const -1
                i32.gt_s
                br_if $label25
                local.get $var6
                i32.const 6
                i32.add
                local.set $var19
                local.get $var15
                i32.const 127
                i32.and
                local.set $var15
                i32.const 7
                local.set $var6
                block $label26
                  loop $label27
                    local.get $var9
                    i32.load8_s
                    local.tee $var14
                    i32.const 127
                    i32.and
                    local.get $var6
                    i32.shl
                    local.get $var15
                    i32.or
                    local.set $var15
                    local.get $var14
                    i32.const -1
                    i32.gt_s
                    br_if $label26
                    local.get $var9
                    i32.const 1
                    i32.add
                    local.set $var9
                    local.get $var6
                    i32.const 7
                    i32.add
                    local.tee $var6
                    i32.const 35
                    i32.ne
                    br_if $label27
                  end $label27
                  local.get $var19
                  local.set $var9
                  br $label25
                end $label26
                local.get $var9
                i32.const 1
                i32.add
                local.set $var9
              end $label25
              local.get $var15
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var15
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var19
            end $label24
            block $label29
              block $label28
                local.get $var21
                i32.const 15
                i32.eq
                br_if $label28
                local.get $var9
                local.set $var15
                br $label29
              end $label28
              local.get $var9
              i32.const 1
              i32.add
              local.set $var15
              local.get $var9
              i32.load8_s
              local.tee $var6
              i32.const 255
              i32.and
              local.set $var14
              block $label30
                local.get $var6
                i32.const -1
                i32.gt_s
                br_if $label30
                local.get $var9
                i32.const 5
                i32.add
                local.set $var16
                local.get $var14
                i32.const 127
                i32.and
                local.set $var14
                i32.const 7
                local.set $var6
                block $label31
                  loop $label32
                    local.get $var15
                    i32.load8_s
                    local.tee $var9
                    i32.const 127
                    i32.and
                    local.get $var6
                    i32.shl
                    local.get $var14
                    i32.or
                    local.set $var14
                    local.get $var9
                    i32.const -1
                    i32.gt_s
                    br_if $label31
                    local.get $var15
                    i32.const 1
                    i32.add
                    local.set $var15
                    local.get $var6
                    i32.const 7
                    i32.add
                    local.tee $var6
                    i32.const 35
                    i32.ne
                    br_if $label32
                  end $label32
                  local.get $var16
                  local.set $var15
                  br $label30
                end $label31
                local.get $var15
                i32.const 1
                i32.add
                local.set $var15
              end $label30
              local.get $var14
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var14
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var16
            end $label29
            block $label34
              block $label33
                local.get $var20
                i32.const 15
                i32.eq
                br_if $label33
                local.get $var15
                local.set $var6
                br $label34
              end $label33
              local.get $var15
              i32.const 1
              i32.add
              local.set $var6
              local.get $var15
              i32.load8_s
              local.tee $var9
              i32.const 255
              i32.and
              local.set $var14
              block $label35
                local.get $var9
                i32.const -1
                i32.gt_s
                br_if $label35
                local.get $var15
                i32.const 5
                i32.add
                local.set $var18
                local.get $var14
                i32.const 127
                i32.and
                local.set $var14
                i32.const 7
                local.set $var9
                block $label36
                  loop $label37
                    local.get $var6
                    i32.load8_s
                    local.tee $var15
                    i32.const 127
                    i32.and
                    local.get $var9
                    i32.shl
                    local.get $var14
                    i32.or
                    local.set $var14
                    local.get $var15
                    i32.const -1
                    i32.gt_s
                    br_if $label36
                    local.get $var6
                    i32.const 1
                    i32.add
                    local.set $var6
                    local.get $var9
                    i32.const 7
                    i32.add
                    local.tee $var9
                    i32.const 35
                    i32.ne
                    br_if $label37
                  end $label37
                  local.get $var18
                  local.set $var6
                  br $label35
                end $label36
                local.get $var6
                i32.const 1
                i32.add
                local.set $var6
              end $label35
              local.get $var14
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var14
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var18
            end $label34
            block $label39
              block $label38
                local.get $var2
                i32.const 2
                i32.ne
                br_if $label38
                local.get $var0
                local.get $var7
                i32.const 1
                i32.shl
                i32.add
                local.tee $var9
                local.get $var19
                i32.store16
                local.get $var9
                i32.const 2
                i32.add
                local.get $var16
                i32.store16
                local.get $var9
                i32.const 4
                i32.add
                local.get $var18
                i32.store16
                br $label39
              end $label38
              local.get $var0
              local.get $var7
              i32.const 2
              i32.shl
              i32.add
              local.tee $var9
              local.get $var19
              i32.store
              local.get $var9
              i32.const 4
              i32.add
              local.get $var16
              i32.store
              local.get $var9
              i32.const 8
              i32.add
              local.get $var18
              i32.store
            end $label39
            local.get $var5
            i32.const 64
            i32.add
            local.get $var4
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var16
            i32.store
            local.get $var9
            local.get $var19
            i32.store offset=4
            local.get $var5
            local.get $var3
            i32.const 2
            i32.shl
            i32.add
            local.get $var19
            i32.store
            local.get $var5
            i32.const 64
            i32.add
            local.get $var4
            i32.const 1
            i32.add
            i32.const 15
            i32.and
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var18
            i32.store
            local.get $var9
            local.get $var16
            i32.store offset=4
            local.get $var5
            local.get $var3
            i32.const 1
            i32.add
            local.tee $var3
            i32.const 15
            i32.and
            i32.const 2
            i32.shl
            i32.add
            local.get $var16
            i32.store
            local.get $var5
            i32.const 64
            i32.add
            local.get $var4
            i32.const 2
            i32.add
            i32.const 15
            i32.and
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var19
            i32.store
            local.get $var9
            local.get $var18
            i32.store offset=4
            local.get $var5
            local.get $var3
            local.get $var17
            i32.const 16
            i32.lt_u
            local.get $var21
            i32.const 15
            i32.eq
            i32.or
            i32.add
            local.tee $var3
            i32.const 15
            i32.and
            i32.const 2
            i32.shl
            i32.add
            local.get $var18
            i32.store
            local.get $var3
            local.get $var20
            i32.eqz
            local.get $var20
            i32.const 15
            i32.eq
            i32.or
            i32.add
            local.set $var3
            local.get $var4
            i32.const 3
            i32.add
            local.set $var4
          end $label7
          local.get $var8
          i32.const 1
          i32.add
          local.set $var8
          local.get $var4
          i32.const 15
          i32.and
          local.set $var4
          local.get $var3
          i32.const 15
          i32.and
          local.set $var3
          local.get $var7
          i32.const 3
          i32.add
          local.tee $var7
          local.get $var1
          i32.lt_u
          br_if $label40
        end $label40
      end $label1
      i32.const 0
      i32.const -3
      local.get $var6
      local.get $var10
      i32.eq
      select
      local.set $var6
    end $label0
    local.get $var5
    i32.const 192
    i32.add
    global.set $global0
    local.get $var6
  )
  (func $sbrk (;3;) (export "sbrk") (param $var0 i32) (result i32)
    (local $var1 i32)
    (local $var2 i32)
    (local $var3 i32)
    i32.const 0
    i32.const 0
    i32.load offset=1024
    local.tee $var1
    local.get $var0
    i32.const 3
    i32.add
    i32.const -4
    i32.and
    i32.add
    local.tee $var0
    i32.store offset=1024
    block $label1
      block $label0
        local.get $var0
        memory.size
        i32.const 16
        i32.shl
        local.tee $var2
        i32.le_u
        br_if $label0
        i32.const -1
        local.set $var3
        local.get $var0
        local.get $var2
        i32.sub
        i32.const 65535
        i32.add
        i32.const 16
        i32.shr_u
        memory.grow
        i32.const -1
        i32.eq
        br_if $label1
      end $label0
      local.get $var1
      local.set $var3
    end $label1
    local.get $var3
  )
  (func $func4 (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    (local $var3 i32)
    block $label1
      block $label0
        local.get $var1
        local.get $var0
        i32.or
        i32.const 3
        i32.and
        i32.eqz
        br_if $label0
        local.get $var0
        local.set $var3
        br $label1
      end $label0
      block $label3
        block $label2
          local.get $var2
          i32.const 16
          i32.ge_u
          br_if $label2
          local.get $var0
          local.set $var3
          br $label3
        end $label2
        local.get $var0
        local.set $var3
        loop $label4
          local.get $var3
          local.get $var1
          i32.load
          i32.store
          local.get $var3
          i32.const 4
          i32.add
          local.get $var1
          i32.const 4
          i32.add
          i32.load
          i32.store
          local.get $var3
          i32.const 8
          i32.add
          local.get $var1
          i32.const 8
          i32.add
          i32.load
          i32.store
          local.get $var3
          i32.const 12
          i32.add
          local.get $var1
          i32.const 12
          i32.add
          i32.load
          i32.store
          local.get $var1
          i32.const 16
          i32.add
          local.set $var1
          local.get $var3
          i32.const 16
          i32.add
          local.set $var3
          local.get $var2
          i32.const -16
          i32.add
          local.tee $var2
          i32.const 15
          i32.gt_u
          br_if $label4
        end $label4
      end $label3
      local.get $var2
      i32.const 4
      i32.lt_u
      br_if $label1
      loop $label5
        local.get $var3
        local.get $var1
        i32.load
        i32.store
        local.get $var1
        i32.const 4
        i32.add
        local.set $var1
        local.get $var3
        i32.const 4
        i32.add
        local.set $var3
        local.get $var2
        i32.const -4
        i32.add
        local.tee $var2
        i32.const 3
        i32.gt_u
        br_if $label5
      end $label5
    end $label1
    block $label6
      local.get $var2
      i32.eqz
      br_if $label6
      loop $label7
        local.get $var3
        local.get $var1
        i32.load8_u
        i32.store8
        local.get $var3
        i32.const 1
        i32.add
        local.set $var3
        local.get $var1
        i32.const 1
        i32.add
        local.set $var1
        local.get $var2
        i32.const -1
        i32.add
        local.tee $var2
        br_if $label7
      end $label7
    end $label6
    local.get $var0
  )
  (func $func5 (param $var0 i32) (param $var1 i32) (param $var2 i32) (result i32)
    (local $var3 i32)
    (local $var4 i32)
    block $label1
      block $label0
        local.get $var0
        i32.const 3
        i32.and
        i32.eqz
        br_if $label0
        local.get $var0
        local.set $var3
        br $label1
      end $label0
      local.get $var1
      i32.const 255
      i32.and
      i32.const 16843009
      i32.mul
      local.set $var4
      block $label3
        block $label2
          local.get $var2
          i32.const 16
          i32.ge_u
          br_if $label2
          local.get $var0
          local.set $var3
          br $label3
        end $label2
        local.get $var0
        local.set $var3
        loop $label4
          local.get $var3
          local.get $var4
          i32.store
          local.get $var3
          i32.const 12
          i32.add
          local.get $var4
          i32.store
          local.get $var3
          i32.const 8
          i32.add
          local.get $var4
          i32.store
          local.get $var3
          i32.const 4
          i32.add
          local.get $var4
          i32.store
          local.get $var3
          i32.const 16
          i32.add
          local.set $var3
          local.get $var2
          i32.const -16
          i32.add
          local.tee $var2
          i32.const 15
          i32.gt_u
          br_if $label4
        end $label4
      end $label3
      local.get $var2
      i32.const 4
      i32.lt_u
      br_if $label1
      loop $label5
        local.get $var3
        local.get $var4
        i32.store
        local.get $var3
        i32.const 4
        i32.add
        local.set $var3
        local.get $var2
        i32.const -4
        i32.add
        local.tee $var2
        i32.const 3
        i32.gt_u
        br_if $label5
      end $label5
    end $label1
    block $label6
      local.get $var2
      i32.eqz
      br_if $label6
      loop $label7
        local.get $var3
        local.get $var1
        i32.store8
        local.get $var3
        i32.const 1
        i32.add
        local.set $var3
        local.get $var2
        i32.const -1
        i32.add
        local.tee $var2
        br_if $label7
      end $label7
    end $label6
    local.get $var0
  )
  (data (i32.const 1024) "\10d\00\00")
)
