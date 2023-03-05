export const keys = {
    w: false,
    s: false,
    a: false,
    d: false,
    space: false,
    escape: false,
    mouse: {
        click: false,
        executeOnceFlag: true,
        x: 0,
        y: 0,
    },
};
export const dimensions = {
    canvas: {
        w: window.innerWidth,
        h: window.innerHeight,
        sw: "100vw",
        sh: "100vh",
    },
    map: {
        x: 0,
        y: 0,
        w: 3200,
        h: 2400,
    },
    gui: {},
};
export const game = {
    gameState: "mainMenu",
    initialPlayingFlag: true,
    pauseFlag: true,
    isPause: false,
    isGameOver: false,
    localStorageKey: "gamev5",
    font: {
        main: "Minecraftia",
        secondary: "Retro gaming",
    },
    colors: {
        blue: "#1a73e8",
        blue2: "#0098ff",
        greenHeal: "#24c927",
        red: "#bd173c",
        grey: "#202124",
    },
};
export const stats = {
    skills: {
        baseAttack: {
            id: "baseAttack",
            speed: 700,
            movementSpeed: 3,
            radius: 5,
            penetrationNumber: 1,
        },
        // remember to change also in lvlup reset
        circlingBalls: {
            // Mistyczne sfery po polsku
            name: "Czaszki",
            id: "circlingBalls",
            lvl: 0,
            damage: 8,
            speed: 1,
            numberBalls: 1,
            radius: 80,
            radiusElement: 10,
        },
        goldenSword: {
            name: "Golden Sword",
            id: "goldenSword",
            counterId: 0,
            lvl: 0,
            damage: 35,
            attackSpeed: 2100,
            attackSpeedCounter: 0,
            movementSpeed: 0.7,
            penetrationNumber: 5,
            radius: 15,
        },
        magicField: {
            name: "Pole",
            id: "magicField",
            lvl: 0,
            attackSpeed: 500,
            damage: 3,
            radius: 100,
        },
        upgrade: {
            skillList: ["circlingBalls", "baseAttack", "fireBall", "magicField"],
            skillsRandomPicked: [],
            executeOnceFlag: true,
            pickSkillId: "",
            amount: 3,
        },
    },
    player: {
        movementSpeed: 2,
        maxHP: 100,
        currentHP: 100,
        hpRegen: 0,
        armor: 1,
        lvl: 1,
        maxXP: 100,
        currentXP: 0,
        maxXpGrowPrecentage: 30,
        upgradePoints: 0,
        baseDamage: 10,
        pickupRange: 100,
    },
    game: {
        AllDamageDone: 0,
        enemiesKilled: 0,
        heartDropChance: 50,
        healHeartValue: 10,
    },
};
export const instances = {
    characters: [],
    enemiesCh: [],
    grassArray: [],
    hearts: [],
    // bullets: [],
    projectiles: [],
    enemies: [],
    expBalls: [],
    player: null,
    appearingText: [],
    skills: {
        magicField: null,
        circling: [],
    },
};
// weapon_golden_sword 291 153 10 22
// skull 288 320 16 16
export const spriteSheetData = {
    particles: {
        flame1: {
            x: 337,
            y: 353,
            w: 5,
            h: 6,
        },
    },
    weapons: {
        skull: {
            x: 291,
            y: 326,
            w: 10,
            h: 9,
        },
        arrow: {
            x: 308,
            y: 186,
            w: 7,
            h: 21,
        },
        goldenSword: {
            x: 291,
            y: 153,
            w: 10,
            h: 22,
        },
    },
    rune: {
        x: 288,
        y: 368,
        w: 16,
        h: 16,
        frames: 4,
        duration: 100,
    },
    heart: {
        x: 288,
        y: 336,
        w: 9,
        h: 8,
    },
    hpBarEmpty: {
        x: 287,
        y: 385,
        w: 18,
        h: 7,
    },
    hpBarFull: {
        x: 287,
        y: 392,
        w: 18,
        h: 7,
    },
    tinyZombie: {
        idle: {
            x: 368,
            y: 18,
            w: 16,
            h: 16,
            frames: 4,
        },
        run: {
            x: 432,
            y: 18,
            w: 16,
            h: 16,
            frames: 4,
        },
        duration: 100,
    },
    elf_m: {
        idle: {
            x: 128,
            y: 36,
            w: 16,
            h: 28,
            frames: 4,
        },
        run: {
            x: 192,
            y: 36,
            w: 16,
            h: 28,
            frames: 4,
        },
        duration: 100,
    },
};
// wall_top_left 16 0 16 16
// wall_top_mid 32 0 16 16
// wall_top_right 48 0 16 16
// wall_left 16 16 16 16
// wall_mid 32 16 16 16
// wall_right 48 16 16 16
// wall_fountain_top 64 0 16 16
// wall_fountain_mid_red_anim 64 16 16 16 3
// wall_fountain_basin_red_anim 64 32 16 16 3
// wall_fountain_mid_blue_anim 64 48 16 16 3
// wall_fountain_basin_blue_anim 64 64 16 16 3
// wall_hole_1 48 32 16 16
// wall_hole_2 48 48 16 16
// wall_banner_red 16 32 16 16
// wall_banner_blue 32 32 16 16
// wall_banner_green 16 48 16 16
// wall_banner_yellow 32 48 16 16
// column_top 80 80 16 16
// column_mid 80 96 16 16
// coulmn_base 80 112 16 16
// wall_column_top 96 80 16 16
// wall_column_mid 96 96 16 16
// wall_coulmn_base 96 112 16 16
// wall_goo 64 80 16 16
// wall_goo_base 64 96 16 16
// floor_1 16 64 16 16
// floor_2 32 64 16 16
// floor_3 48 64 16 16
// floor_4 16 80 16 16
// floor_5 32 80 16 16
// floor_6 48 80 16 16
// floor_7 16 96 16 16
// floor_8 32 96 16 16
// floor_ladder 48 96 16 16
// floor_spikes_anim 16 176 16 16 4
// wall_side_top_left 0 112 16 16
// wall_side_top_right 16 112 16 16
// wall_side_mid_left 0 128 16 16
// wall_side_mid_right 16 128 16 16
// wall_side_front_left 0 144 16 16
// wall_side_front_right 16 144 16 16
// wall_corner_top_left 32 112 16 16
// wall_corner_top_right 48 112 16 16
// wall_corner_left 32 128 16 16
// wall_corner_right 48 128 16 16
// wall_corner_bottom_left 32 144 16 16
// wall_corner_bottom_right 48 144 16 16
// wall_corner_front_left 32 160 16 16
// wall_corner_front_right 48 160 16 16
// wall_inner_corner_l_top_left 80 128 16 16
// wall_inner_corner_l_top_rigth 64 128 16 16
// wall_inner_corner_mid_left 80 144 16 16
// wall_inner_corner_mid_rigth 64 144 16 16
// wall_inner_corner_t_top_left 80 160 16 16
// wall_inner_corner_t_top_rigth 64 160 16 16
// edge 96 128 16 16
// hole 96 144 16 16
// doors_all 16 221 64 35
// doors_frame_left 16 224 16 32
// doors_frame_top 32 221 32 3
// doors_frame_righ 63 224 16 32
// doors_leaf_closed 32 224 32 32
// doors_leaf_open 80 224 32 32
// chest_empty_open_anim 304 288 16 16 3
// chest_full_open_anim 304 304 16 16 3
// chest_mimic_open_anim 304 320 16 16 3
// flask_big_red 288 224 16 16
// flask_big_blue 304 224 16 16
// flask_big_green 320 224 16 16
// flask_big_yellow 336 224 16 16
// flask_red 288 240 16 16
// flask_blue 304 240 16 16
// flask_green 320 240 16 16
// flask_yellow 336 240 16 16
// skull 288 320 16 16
// crate 288 298 16 22
// coin_anim 288 272 8 8 4
// ui_heart_full 288 256 16 16
// ui_heart_half 304 256 16 16
// ui_heart_empty 320 256 16 16
// weapon_knife 293 18 6 13
// weapon_rusty_sword 307 26 10 21
// weapon_regular_sword 323 26 10 21
// weapon_red_gem_sword 339 26 10 21
// weapon_big_hammer 291 42 10 37
// weapon_hammer 307 55 10 24
// weapon_baton_with_spikes 323 57 10 22
// weapon_mace 339 55 10 24
// weapon_katana 293 82 6 29
// weapon_saw_sword 307 86 10 25
// weapon_anime_sword 322 81 12 30
// weapon_axe 341 90 9 21
// weapon_machete 294 121 5 22
// weapon_cleaver 310 124 8 19
// weapon_duel_sword 325 113 9 30
// weapon_knight_sword 339 114 10 29
// weapon_golden_sword 291 153 10 22
// weapon_lavish_sword 307 145 10 30
// weapon_red_magic_staff 324 145 8 30
// weapon_green_magic_staff 340 145 8 30
// weapon_spear 293 177 6 30
// weapon_arrow 308 186 7 21
// weapon_bow 325 180 7 25
// tiny_zombie_idle_anim 368 16 16 16 4
// tiny_zombie_run_anim 432 16 16 16 4
// goblin_idle_anim 368 32 16 16 4
// goblin_run_anim 432 32 16 16 4
// imp_idle_anim 368 48 16 16 4
// imp_run_anim 432 48 16 16 4
// skelet_idle_anim 368 80 16 16 4
// skelet_run_anim 432 80 16 16 4
// muddy_idle_anim 368 112 16 16 4
// muddy_run_anim 368 112 16 16 4
// swampy_idle_anim 432 112 16 16 4
// swampy_run_anim 432 112 16 16 4
// zombie_idle_anim 368 144 16 16 4
// zombie_run_anim 368 144 16 16 4
// ice_zombie_idle_anim 432 144 16 16 4
// ice_zombie_run_anim 432 144 16 16 4
// masked_orc_idle_anim 368 172 16 20 4
// masked_orc_run_anim 432 172 16 20 4
// orc_warrior_idle_anim 368 204 16 20 4
// orc_warrior_run_anim 432 204 16 20 4
// orc_shaman_idle_anim 368 236 16 20 4
// orc_shaman_run_anim 432 236 16 20 4
// necromancer_idle_anim 368 268 16 20 4
// necromancer_run_anim 368 268 16 20 4
// wogol_idle_anim 368 300 16 20 4
// wogol_run_anim 432 300 16 20 4
// chort_idle_anim 368 328 16 24 4
// chort_run_anim 432 328 16 24 4
// big_zombie_idle_anim 16 270 32 34 4
// big_zombie_run_anim 144 270 32 34 4
// ogre_idle_anim  16 320 32 32 4
// ogre_run_anim 144 320 32 32 4
// big_demon_idle_anim  16 364 32 36 4
// big_demon_run_anim 144 364 32 36 4
// elf_f_idle_anim 128 4 16 28 4
// elf_f_run_anim 192 4 16 28 4
// elf_f_hit_anim 256 4 16 28 1
// elf_m_idle_anim 128 36 16 28 4
// elf_m_run_anim 192 36 16 28 4
// elf_m_hit_anim 256 36 16 28 1
// knight_f_idle_anim 128 68 16 28 4
// knight_f_run_anim 192 68 16 28 4
// knight_f_hit_anim 256 68 16 28 1
// knight_m_idle_anim 128 100 16 28 4
// knight_m_run_anim 192 100 16 28 4
// knight_m_hit_anim 256 100 16 28 1
// wizzard_f_idle_anim 128 132 16 28 4
// wizzard_f_run_anim 192 132 16 28 4
// wizzard_f_hit_anim 256 132 16 28 1
// wizzard_m_idle_anim 128 164 16 28 4
// wizzard_m_run_anim 192 164 16 28 4
// wizzard_m_hit_anim 256 164 16 28 1
// lizard_f_idle_anim 128 196 16 28 4
// lizard_f_run_anim 192 196 16 28 4
// lizard_f_hit_anim 256 196 16 28 1
// lizard_m_idle_anim 128 228 16 28 4
// lizard_m_run_anim 192 228 16 28 4
// lizard_m_hit_anim 256 228 16 28 1
