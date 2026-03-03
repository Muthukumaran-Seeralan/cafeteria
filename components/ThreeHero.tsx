"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas")
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    )
  } catch {
    return false
  }
}

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current || !isWebGLAvailable()) return

    const mount = mountRef.current

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      })
    } catch {
      return
    }

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Group all parts together for easy rotation
    const group = new THREE.Group()
    scene.add(group)

    // Coffee machine body
    const machineGeometry = new THREE.BoxGeometry(2, 3, 1.5)
    const machineMaterial = new THREE.MeshStandardMaterial({ color: "#333" })
    const machine = new THREE.Mesh(machineGeometry, machineMaterial)
    group.add(machine)

    // Coffee cup
    const cupGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1, 32)
    const cupMaterial = new THREE.MeshStandardMaterial({ color: "#ffffff" })
    const cup = new THREE.Mesh(cupGeometry, cupMaterial)
    cup.position.y = -1.5
    group.add(cup)

    // Coffee liquid
    const coffeeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 32)
    const coffeeMaterial = new THREE.MeshStandardMaterial({ color: "#6f4e37" })
    const coffee = new THREE.Mesh(coffeeGeometry, coffeeMaterial)
    coffee.position.y = -1.9
    group.add(coffee)

    // Milk layer (sits just above the coffee)
    const milkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.08, 32)
    const milkMaterial = new THREE.MeshStandardMaterial({
      color: "#f5f0eb",
      roughness: 0.2,
      metalness: 0.0,
    })
    const milk = new THREE.Mesh(milkGeometry, milkMaterial)
    milk.position.y = -1.82     // just above coffee layer
    milk.scale.y = 0            // start invisible
    group.add(milk)

    // Scroll-driven coffee fill animation
    gsap.to(coffee.scale, {
      y: 8,
      scrollTrigger: {
        trigger: mountRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    // Scroll-driven milk layer animation (lags slightly behind coffee)
    gsap.to(milk.scale, {
      y: 6,
      scrollTrigger: {
        trigger: mountRef.current,
        start: "15% top",    // starts a bit later than coffee
        end: "bottom top",
        scrub: true,
      },
    })

    // Milk also rises upward as it fills
    gsap.to(milk.position, {
      y: -1.5,
      scrollTrigger: {
        trigger: mountRef.current,
        start: "15% top",
        end: "bottom top",
        scrub: true,
      },
    })

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xc8a97e, 4, 20)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const rimLight = new THREE.PointLight(0xe8621c, 2, 15)
    rimLight.position.set(-5, -3, -5)
    scene.add(rimLight)

    camera.position.z = 3

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      group.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      machineGeometry.dispose()
      machineMaterial.dispose()
      cupGeometry.dispose()
      cupMaterial.dispose()
      coffeeGeometry.dispose()
      coffeeMaterial.dispose()
      milkGeometry.dispose()
      milkMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="h-[300vh] w-full">
      <div ref={mountRef} className="sticky top-0 h-screen w-full -z-10" />
    </div>
  )
}