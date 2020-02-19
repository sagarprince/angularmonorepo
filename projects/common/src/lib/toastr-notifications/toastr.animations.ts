import {
  AnimationTriggerMetadata,
  trigger,
  style,
  state,
  transition,
  animate,
  query,
  stagger,
  keyframes
} from "@angular/animations";

export const ToastrAnimations: AnimationTriggerMetadata = trigger("inOut", [
  state("fade", style({ opacity: 1 })),
  transition("void => fade", [
    style({
      opacity: 1
    }),
    animate("0.4s ease-in")
  ]),
  transition("fade => void", [
    animate(
      "0.4s 0.1s ease-out",
      style({
        opacity: 0
      })
    )
  ]),

  state("slideFromLeft", style({ opacity: 1, transform: "translateX(0)" })),
  transition("void => slideFromLeft", [
    style({
      opacity: 0,
      transform: "translateX(-100%)"
    }),
    animate("0.4s ease-in")
  ]),
  transition("slideFromLeft => void", [
    animate(
      "0.4s 0.1s ease-out",
      style({
        opacity: 0,
        transform: "translateX(100%)"
      })
    )
  ]),

  state("slideFromRight", style({ opacity: 1, transform: "translateX(0)" })),
  transition("void => slideFromRight", [
    style({
      opacity: 0,
      transform: "translateX(100%)"
    }),
    animate("0.4s ease-in")
  ]),
  transition("slideFromRight => void", [
    animate(
      "0.4s 0.1s ease-out",
      style({
        opacity: 0,
        transform: "translateX(-100%)"
      })
    )
  ]),

  state("slideFromTop", style({ opacity: 1, transform: "translateY(0)" })),
  transition("void => slideFromTop", [
    style({
      opacity: 0,
      transform: "translateY(-100%)"
    }),
    animate("0.4s ease-in")
  ]),
  transition("slideFromTop => void", [
    animate(
      "0.4s 0.1s ease-out",
      style({
        opacity: 0,
        transform: "translateY(-100%)"
      })
    )
  ]),

  state("slideFromBottom", style({ opacity: 1, transform: "translateY(0)" })),
  transition("void => slideFromBottom", [
    style({
      opacity: 0,
      transform: "translateY(100%)"
    }),
    animate("0.4s ease-in")
  ]),
  transition("slideFromBottom => void", [
    animate(
      "0.4s 0.1s ease-out",
      style({
        opacity: 0,
        transform: "translateY(-100%)"
      })
    )
  ])
]);
