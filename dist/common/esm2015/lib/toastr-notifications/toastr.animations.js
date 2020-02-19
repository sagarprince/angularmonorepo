/**
 * @fileoverview added by tsickle
 * Generated from: lib/toastr-notifications/toastr.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { trigger, style, state, transition, animate } from "@angular/animations";
/** @type {?} */
export const ToastrAnimations = trigger("inOut", [
    state("fade", style({ opacity: 1 })),
    transition("void => fade", [
        style({
            opacity: 1
        }),
        animate("0.4s ease-in")
    ]),
    transition("fade => void", [
        animate("0.4s 0.1s ease-out", style({
            opacity: 0
        }))
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
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateX(100%)"
        }))
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
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateX(-100%)"
        }))
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
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateY(-100%)"
        }))
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
        animate("0.4s 0.1s ease-out", style({
            opacity: 0,
            transform: "translateY(-100%)"
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21tb24vIiwic291cmNlcyI6WyJsaWIvdG9hc3RyLW5vdGlmaWNhdGlvbnMvdG9hc3RyLmFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFJUixNQUFNLHFCQUFxQixDQUFDOztBQUU3QixNQUFNLE9BQU8sZ0JBQWdCLEdBQTZCLE9BQU8sQ0FBQyxPQUFPLEVBQUU7SUFDekUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxVQUFVLENBQUMsY0FBYyxFQUFFO1FBQ3pCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDeEIsQ0FBQztJQUNGLFVBQVUsQ0FBQyxjQUFjLEVBQUU7UUFDekIsT0FBTyxDQUNMLG9CQUFvQixFQUNwQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFFRixLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekUsVUFBVSxDQUFDLHVCQUF1QixFQUFFO1FBQ2xDLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDO1FBQ0YsT0FBTyxDQUFDLGNBQWMsQ0FBQztLQUN4QixDQUFDO0lBQ0YsVUFBVSxDQUFDLHVCQUF1QixFQUFFO1FBQ2xDLE9BQU8sQ0FDTCxvQkFBb0IsRUFDcEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FDSDtLQUNGLENBQUM7SUFFRixLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUMxRSxVQUFVLENBQUMsd0JBQXdCLEVBQUU7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUM7UUFDRixPQUFPLENBQUMsY0FBYyxDQUFDO0tBQ3hCLENBQUM7SUFDRixVQUFVLENBQUMsd0JBQXdCLEVBQUU7UUFDbkMsT0FBTyxDQUNMLG9CQUFvQixFQUNwQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN4RSxVQUFVLENBQUMsc0JBQXNCLEVBQUU7UUFDakMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsbUJBQW1CO1NBQy9CLENBQUM7UUFDRixPQUFPLENBQUMsY0FBYyxDQUFDO0tBQ3hCLENBQUM7SUFDRixVQUFVLENBQUMsc0JBQXNCLEVBQUU7UUFDakMsT0FBTyxDQUNMLG9CQUFvQixFQUNwQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxtQkFBbUI7U0FDL0IsQ0FBQyxDQUNIO0tBQ0YsQ0FBQztJQUVGLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRTtRQUNwQyxLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSxrQkFBa0I7U0FDOUIsQ0FBQztRQUNGLE9BQU8sQ0FBQyxjQUFjLENBQUM7S0FDeEIsQ0FBQztJQUNGLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRTtRQUNwQyxPQUFPLENBQ0wsb0JBQW9CLEVBQ3BCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLG1CQUFtQjtTQUMvQixDQUFDLENBQ0g7S0FDRixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIHRyaWdnZXIsXHJcbiAgc3R5bGUsXHJcbiAgc3RhdGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICBhbmltYXRlLFxyXG4gIHF1ZXJ5LFxyXG4gIHN0YWdnZXIsXHJcbiAga2V5ZnJhbWVzXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUb2FzdHJBbmltYXRpb25zOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFwiaW5PdXRcIiwgW1xyXG4gIHN0YXRlKFwiZmFkZVwiLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxyXG4gIHRyYW5zaXRpb24oXCJ2b2lkID0+IGZhZGVcIiwgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KSxcclxuICAgIGFuaW1hdGUoXCIwLjRzIGVhc2UtaW5cIilcclxuICBdKSxcclxuICB0cmFuc2l0aW9uKFwiZmFkZSA9PiB2b2lkXCIsIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIFwiMC40cyAwLjFzIGVhc2Utb3V0XCIsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcblxyXG4gIHN0YXRlKFwic2xpZGVGcm9tTGVmdFwiLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIgfSkpLFxyXG4gIHRyYW5zaXRpb24oXCJ2b2lkID0+IHNsaWRlRnJvbUxlZnRcIiwgW1xyXG4gICAgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIlxyXG4gICAgfSksXHJcbiAgICBhbmltYXRlKFwiMC40cyBlYXNlLWluXCIpXHJcbiAgXSksXHJcbiAgdHJhbnNpdGlvbihcInNsaWRlRnJvbUxlZnQgPT4gdm9pZFwiLCBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBcIjAuNHMgMC4xcyBlYXNlLW91dFwiLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcblxyXG4gIHN0YXRlKFwic2xpZGVGcm9tUmlnaHRcIiwgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiIH0pKSxcclxuICB0cmFuc2l0aW9uKFwidm9pZCA9PiBzbGlkZUZyb21SaWdodFwiLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDEwMCUpXCJcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcIjAuNHMgZWFzZS1pblwiKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCJzbGlkZUZyb21SaWdodCA9PiB2b2lkXCIsIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgIFwiMC40cyAwLjFzIGVhc2Utb3V0XCIsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgXSksXHJcblxyXG4gIHN0YXRlKFwic2xpZGVGcm9tVG9wXCIsIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMClcIiB9KSksXHJcbiAgdHJhbnNpdGlvbihcInZvaWQgPT4gc2xpZGVGcm9tVG9wXCIsIFtcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCJcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcIjAuNHMgZWFzZS1pblwiKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCJzbGlkZUZyb21Ub3AgPT4gdm9pZFwiLCBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBcIjAuNHMgMC4xcyBlYXNlLW91dFwiLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMTAwJSlcIlxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pLFxyXG5cclxuICBzdGF0ZShcInNsaWRlRnJvbUJvdHRvbVwiLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCIgfSkpLFxyXG4gIHRyYW5zaXRpb24oXCJ2b2lkID0+IHNsaWRlRnJvbUJvdHRvbVwiLCBbXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDEwMCUpXCJcclxuICAgIH0pLFxyXG4gICAgYW5pbWF0ZShcIjAuNHMgZWFzZS1pblwiKVxyXG4gIF0pLFxyXG4gIHRyYW5zaXRpb24oXCJzbGlkZUZyb21Cb3R0b20gPT4gdm9pZFwiLCBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICBcIjAuNHMgMC4xcyBlYXNlLW91dFwiLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMTAwJSlcIlxyXG4gICAgICB9KVxyXG4gICAgKVxyXG4gIF0pXHJcbl0pO1xyXG4iXX0=