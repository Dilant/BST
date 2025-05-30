declare module "game:type" {
    const enum ParticleEmitterBlendMode {
        Alpha = 0,
        Additive = 1,
        Premultiply = 2,
    }

    type ParticleEmitterTimeNode = {
        Time: float
        Color: ColorRGBA
        Size: float
    }

    type ParticleEmitterData = {
        "TransformOffset": Trans
        "AutoStart": bool
        "Loop": bool
        "SimulationInLocal": bool
        "Duration": float
        "SpawnRate": Float2
        "BurstCount": Float2
        "SpawnBoxSize": Float3
        "Velocity": Float2
        "StartRotation": Float2
        "AngularVelocity": Float2
        "FollowCamera": bool
        "TexturePath": string
        "BlendMode": ParticleEmitterBlendMode
        "Life": Float2
        "Size": Float2
        "TimeNodes": ParticleEmitterTimeNode[]
        "Gravity": float
        "TurbulenceIntensity": float
        "TurbulenceFrequency": float
        /**
         * @range `1 ~ 32`
         */
        "AnimationTilesX": int
        /**
         * @range `1 ~ 32`
         */
        "AnimationTilesY": int
    }

    type ParticleEmitterMethod = {
        play: () => void
        pause: () => void
        stop: () => void
    }
}
